import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  filteredClients$!: Observable<Array<Client>> | undefined;
  filteredProducts$!: Observable<Array<Product>> | undefined;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.store.select(selectAllClients).subscribe(
      clients => this.clients = clients
    );

    this.store.select(selectAllProducts).subscribe(
      products => this.products = products
    );

    this.filteredClients$ = this.form.get("client")?.valueChanges.pipe(
      startWith(""),
      map(value => typeof value === "string" ? value : value.name),
      map(name => name ? this.filterClients(name) : this.clients.slice())
    );

    this.filteredProducts$ = this.form.get("product")?.valueChanges.pipe(
      startWith(""),
      map(value => typeof value === "string" ? value : value.name),
      map(name => name ? this.filterProducts(name) : this.products.slice())
    );

    this.store.dispatch(StartClientList({}));
    this.store.dispatch(StartProductList({}));
  }

  filterClients(name: string): Array<Client> {
    const keyword: string = name.toLowerCase();
    return this.clients.filter(
      client => client.firstName
      .toLowerCase()
      .includes(keyword)
    );
  }

  filterProducts(name: string): Array<Product> {
    const keyword: string = name.toLowerCase();
    return this.products.filter(
      product => product.name
      .toLowerCase()
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
    this.store.dispatch(
      StartOrderCreate({ payload })
    );
  }
}
