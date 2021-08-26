import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Category, CategoryService } from 'src/app/core/services/products/category.service';
import { ProductService } from 'src/app/core/services/products/product.service';

import { NotificationComponent } from 'src/app/core/components/notification/notification.component';

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
    private productService: ProductService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.list().subscribe(
      categories => this.categories = categories
    );
  }

  create(): void {
    if (!this.form.valid) throw new Error("Invalid form");
    
    this.productService.create(this.form.value).subscribe(
      product => {
        this.snackbar.openFromComponent(NotificationComponent, {
          duration: 3000,
          data: {
            icon: "check-circle",
            message: `Se agrego ${ product.name } a los productos`
          },
          panelClass: [`bg-success`]
        });

        this.router.navigate(["products"]);
      },
      err => console.error("Error: ", err)
    );
  }
}
