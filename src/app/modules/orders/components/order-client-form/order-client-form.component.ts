import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Client } from './../../../../core/models/bussines-logic/client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-client-form',
  templateUrl: './order-client-form.component.html',
  styleUrls: ['./order-client-form.component.scss']
})
export class OrderClientFormComponent implements OnInit {

  client: Client;
  clientForm: FormGroup;
  formSubmitted: boolean;

  clientFirstName = new FormControl('', Validators.required);
  clientLastName = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder) {
    this.client = new Client();
    this.clientForm = formBuilder.group({
      firstname: this.clientFirstName,
      lastname: this.clientLastName
    });
  }

  get fc() { return this.clientForm.controls; }

  ngOnInit() {
  }

}
