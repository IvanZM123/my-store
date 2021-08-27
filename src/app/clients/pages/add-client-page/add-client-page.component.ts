import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartClientCreate } from 'src/app/core/store/clients/client.actions';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.css']
})
export class AddClientPageComponent implements OnInit {
  personalDataForm!: FormGroup;
  additionalDataForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    this.personalDataForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      avatar: new FormControl("", [Validators.required])
    });

    this.additionalDataForm = this.formBuilder.group({
      phone: new FormControl("", [Validators.required]),
      NIT: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email])
    });
  }

  create(): void {
    const { value: personalData, valid: isValidPersonal } = this.personalDataForm;
    const { value: additionalData, valid: isValidAdditional } = this.additionalDataForm;

    if (!isValidPersonal || !isValidAdditional) throw new Error("Invalid form.");

    const action = StartClientCreate({
      payload: { ...personalData, ...additionalData }
    });
    this.store.dispatch(action);
  }
}
