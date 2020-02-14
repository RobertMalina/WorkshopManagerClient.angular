import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: `<div id="orders-content">
    <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
