import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartClientCreate } from 'src/app/core/store/clients/client.actions';
import { rules } from 'src/app/core/config/rules.config';

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
      firstName: new FormControl("", [Validators.required, Validators.pattern(rules.name.regex)]),
      lastName: new FormControl("", [Validators.required, Validators.pattern(rules.name.regex)]),
      avatar: new FormControl("", [Validators.required, Validators.pattern(rules.url.regex)])  
    });

    this.additionalDataForm = this.formBuilder.group({
      phone: new FormControl("", [Validators.required, Validators.pattern(rules.phone.regex)]),
      NIT: new FormControl("", [Validators.required, Validators.pattern(rules.NIT.regex)]),
      email: new FormControl("", [Validators.email, Validators.email])
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

  getFirstNameError() {
    if (this.personalDataForm.get("firstName")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return rules.name.msgError;
  }

  getLastNameError() {
    if (this.personalDataForm.get("lastName")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return rules.name.msgError;
  }

  getUrlError() {
    if (this.personalDataForm.get("avatar")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return rules.url.msgError;
  }

  getPhoneError() {
    if (this.personalDataForm.get("phone")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return rules.phone.msgError;
  }

  getNITError() {
    if (this.personalDataForm.get("NIT")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return rules.NIT.msgError;
  }

  getEmailError() {
    if (this.personalDataForm.get("email")?.hasError("required")) {
      return "Este campo es requerido";
    }
    return "El email es invalido. Siga la siguiente estrutura abc@gmail.com";
  }
}
