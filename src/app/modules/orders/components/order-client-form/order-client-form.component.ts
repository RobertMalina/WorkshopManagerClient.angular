import { FormGroup, FormControl, Validators, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Client } from './../../../../core/models/bussines-logic/client';
import { Component, OnInit, forwardRef } from '@angular/core';

@Component({
  selector: 'app-order-client-form',
  template: `
  <ng-container [formGroup]="clientForm">
  <p>Client's data</p>

  <mat-form-field class="example-full-width">
    <mat-label>First name</mat-label>
    <input matInput [formControl]="firstname">
    <mat-error *ngIf="firstname.hasError('required')">
     Client's firstname is <strong>required</strong>
    </mat-error>
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <mat-label>Last name</mat-label>
    <input matInput [formControl]="lastname">
    <mat-error *ngIf="lastname.hasError('required')">
     Client's lastname is <strong>required</strong>
    </mat-error>
  </mat-form-field>

</ng-container>`,
  styleUrls: ['./order-client-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OrderClientFormComponent),
      multi: true
    }
  ]
})
export class OrderClientFormComponent implements OnInit, ControlValueAccessor {

  client: Client;
  clientForm: FormGroup;
  formSubmitted: boolean;

  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);

  get fc() { return this.clientForm.controls; }

  constructor(formBuilder: FormBuilder) {

    this.client = new Client();

    this.clientForm = formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname
    });
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    this.clientForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.clientForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.clientForm.disable() : this.clientForm.enable();
  }



  ngOnInit() {
  }

}
