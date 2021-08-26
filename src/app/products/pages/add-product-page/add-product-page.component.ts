import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.form.value);
  }
}
