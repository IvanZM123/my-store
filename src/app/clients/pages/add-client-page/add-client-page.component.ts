import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/core/services/clients/clients.service';

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
    private clientService: ClientService
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

    if (isValidPersonal && isValidAdditional) {
      this.clientService.create({
        ...personalData,
        ...additionalData
      }).subscribe(
        client => console.log(client)
      );
    }
  }
}
