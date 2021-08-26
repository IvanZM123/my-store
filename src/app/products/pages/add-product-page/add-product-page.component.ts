import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";
import { StartProductCreate } from 'src/app/core/store/products/product.actions';

import { Category, CategoryService } from 'src/app/core/services/products/category.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    picture: new FormControl("", [Validators.required]),
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
}
