import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";
import { StartProductCreate } from 'src/app/core/store/products/product.actions';

import { Category, CategoryService } from 'src/app/core/services/products/category.service';
import { rules } from 'src/app/core/config/rules.config';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    picture: new FormControl("", [Validators.required, Validators.pattern(rules.url.regex)]),
    categoriesId: new FormControl("", [Validators.required, Validators.pattern(/[0-9]/)]),
    price: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });
  categories: Array<Category> = [];

  constructor(
    private categoryService: CategoryService,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    this.categoryService.list().subscribe(
      categories => this.categories = categories
    );
  }

  create(): void {
    if (!this.form.valid) throw new Error("Invalid form");

    this.store.dispatch(StartProductCreate({
      payload: this.form.value
    }));
  }

  getNameError(): string {
    if (this.form.get("name")?.hasError("required")) {
      return "Este campo es obligatorio.";
    }

    if (this.form.get("name")?.hasError("minlength")) {
      return "Debe ser mayor a 5 caracteres.";
    }

    return "";
  }

  getPictureError(): string {
    if (this.form.get("picture")?.hasError("required")) {
      return "Este campo es obligatorio.";
    }
    return rules.url.msgError;
  }

  getCategoriesIdError(): string {
    if (this.form.get("categoriesId")?.hasError("required")) {
      return "Este campo es obligatorio.";
    }
    return "";
  }

  getPriceError(): string {
    if (this.form.get("price")?.hasError("required")) {
      return "Este campo es requerido.";
    }
    return "El formato ingresado es invalido..";
  }

  getDescriptionError(): string {
    if (this.form.get("description")?.hasError("required")) {
      return "Este campo es requerido.";
    }
    return "";
  }
}
