import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-register',
  template: `<div id="order-register-content">
  <p class="subfeature-title">
    {{ title | uppercase }}
  </p>
  <app-order-register-form></app-order-register-form>
  <app-order-summary></app-order-summary>
</div>`,
  styleUrls: ['./order-register.component.scss']
})
export class OrderRegisterComponent implements OnInit {

  title = 'Register new order';

  constructor() { }

  ngOnInit() {
  }

}
