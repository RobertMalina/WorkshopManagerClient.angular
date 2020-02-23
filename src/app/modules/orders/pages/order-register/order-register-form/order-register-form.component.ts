import { map, filter } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Order } from './../../../../../core/models/bussines-logic/order';
import { Component, OnInit } from '@angular/core';
import { FormErrorStateMatcher } from 'src/app/core/models/helpers/form-error-state-matcher';

@Component({
  selector: 'app-order-register-form',
  templateUrl: './order-register-form.component.html',
  styleUrls: ['./order-register-form.component.scss']
})
export class OrderRegisterFormComponent implements OnInit {

  order: Order;
  orderForm: FormGroup;
  formSubmitted: boolean;

  matcher = new FormErrorStateMatcher();

  title = new FormControl('', Validators.required);
  vehicleDescription = new FormControl('', Validators.required);
  clientData = new FormControl('');

  constructor(formBuilder: FormBuilder) {
    this.order = new Order();

    this.orderForm = formBuilder.group({
      title: this.title,
      vehicleDescription: this.vehicleDescription,
      clientData: this.clientData
    });

    this.orderForm.valueChanges.pipe(
      map((value) => {
        value.firstName = value.firstName.toUpperCase();
        return value;
      }),
      filter((value) => this.orderForm.valid)
    )
      .subscribe((value) => {
        console.log('Model Driven Form valid value: vm = ',
          JSON.stringify(value));
      });
  }

  ngOnInit() {
  }

  get fc() { return this.orderForm.controls; }

  onSubmit() {

  }

}
