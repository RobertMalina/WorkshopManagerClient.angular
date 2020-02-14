import { OrderProgressBarConfig } from './../../../../../../core/models/bussines-logic/order-progressbar-config';
import { Order } from 'src/app/core/models/bussines-logic/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list-item',
  template: `
  <div class="item-data-container">
    <div class="left-side">
      <p class="order-title"> {{ order.title | uppercase }} </p>
      <p class="vehicle-desciption"> {{ order.vehicleDescription }} </p>
      <div class="datetimes-container">
        <p class="order-date">
          <span>Date register:</span> {{ order.registerDate | date}}
        </p>
        <p class="order-date">
          <span>Date start:</span> {{ order.registerDate | date }}
        </p>
      </div>
    </div>
    <div class="right-side">
      <div button-section>
        <button>Details</button>
      </div>
    </div>
    <app-order-progress [config]="getProgressBarConfigFor(order)"></app-order-progress>
  </div>`,
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {

  order: Order;

  constructor() {

    this.order = {
      title: 'Wymiana sprzęgła & dwumasa',
      vehicleDescription: 'Alfa 159 SW 1.9 TDI 16v',
      registerDate: new Date(),
      estimatedTime: 24,
      spentTime: 16,
      supervisor: {
        firstName: 'Jan',
        lastName: 'Kowalski',
        phoneNumber: '321 892 112'
      }
    };
  }

  getProgressBarConfigFor(): OrderProgressBarConfig {
    return {
      estimatedTime: 24,
      spentTime: 18
    };
  }

  ngOnInit() {
  }

}
