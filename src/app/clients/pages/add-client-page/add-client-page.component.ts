import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.css']
})
export class AddClientPageComponent implements OnInit {
  personalDataForm!: FormGroup;
  additionalDataForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personalDataForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      picture: new FormControl("", [Validators.required])
    });

    this.additionalDataForm = this.formBuilder.group({
      phone: new FormControl("", [Validators.required]),
      NIT: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email])
    });
  }

  create(): void {
    console.log({
      ...this.personalDataForm.value,
      ...this.additionalDataForm.value
    })
  }
}
