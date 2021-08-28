import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Client } from 'src/app/core/services/clients/clients.service';
import { Product } from 'src/app/core/services/products/product.service';
import { Order } from 'src/app/core/services/orders/order.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartClientList } from 'src/app/core/store/clients/client.actions';
import { StartProductList } from 'src/app/core/store/products/product.actions';
import { StartOrderCreate } from 'src/app/core/store/orders/order.actions';

import { selectAllClients } from 'src/app/core/store/clients/client.selectors';
import { selectAllProducts } from 'src/app/core/store/products/product.selectors';
import { getMsgFormFieldError } from 'src/app/core/helpers/validateFormField.helpers';

export interface FilteredParams {
  formControl: AbstractControl | null;
  nameEntity: string;
  key: string;
}

export interface FilterEntity {
  name: string;
  key: string;
  entities: Array<any>;
}

@Component({
  selector: 'app-order-create-page',
  templateUrl: './order-create-page.component.html',
  styleUrls: ['./order-create-page.component.css']
})
export class OrderCreatePageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    client: new FormControl("", [Validators.required]),
    product: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required])
  });
  products: Array<Product> = [];
  clients: Array<Client> = []

  filteredProducts$!: Observable<Array<Product>> | undefined;
  filteredClients$!: Observable<Array<Client>> | undefined;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.store.select(selectAllClients).subscribe(
      clients => this.clients = clients
    );

    this.store.select(selectAllProducts).subscribe(
      products => this.products = products
    );

    this.filteredClients$ = this.filteredEntities({
      formControl: this.form.get("client"),
      nameEntity: "clients",
      key: "firstName"
    });

    this.filteredProducts$ = this.filteredEntities({
      formControl: this.form.get("product"),
      nameEntity: "products",
      key: "name"
    });

    this.store.dispatch(StartClientList({}));
    this.store.dispatch(StartProductList({}));
  }

  filteredEntities(data: FilteredParams) {
    const { formControl, nameEntity, key } = data;

    return formControl?.valueChanges.pipe(
      startWith(""),
      map(value => typeof value === "string" ? value : value.name),
      map(name => {
        const value = this as any;
        const entities: Array<any> = value[nameEntity];
        return name ? this.filterEntities({ name, key, entities }) : entities.slice();
      })
    );
  }

  filterEntities(payload: FilterEntity): Array<any> {
    const keyword: string = payload.name.toLocaleLowerCase();
    return payload.entities.filter(
      (entity: any) => entity[payload.key]
      .toLocaleLowerCase()
      .includes(keyword)
    );
  }

  displayClient(client: Client): string {
    return client && client.firstName ? client.firstName : "";
  }

  displayProduct(product: Product): string {
    return product && product.name ? product.name : "";
  }

  create(): void {
    if (this.form.invalid) throw new Error("Invalid form");

    const payload: Partial<Order> = {
      productsId: this.form.value.product.id,
      clientsId: this.form.value.client.id,
      quantity: this.form.value.quantity
    }
    this.store.dispatch(StartOrderCreate({ payload }));
  }

  getMsgError(field: string): string {
    return getMsgFormFieldError(this.form, field);
  }
}
