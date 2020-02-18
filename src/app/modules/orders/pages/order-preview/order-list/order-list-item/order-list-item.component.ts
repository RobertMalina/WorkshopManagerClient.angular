import { OrderProgressBarConfig } from './../../../../../../core/models/bussines-logic/order-progressbar-config';
import { Order } from 'src/app/core/models/bussines-logic/order';
import { Component, OnInit, Input } from '@angular/core';
import { OrderStatus } from 'src/app/core/models/bussines-logic/order-status.enum';

@Component({
  selector: 'app-order-list-item',
  template: `
  <div class="list-item">
    <div class="data-container">
      <div class="left-side side">
        <p class="order-title medium-font"> {{ order.title | uppercase }} </p>
        <p class="order-vehicle medium-font"> {{ order.vehicleDescription }} </p>
        <div class="datetimes-section section">
          <div class="data-row order-date">
            <span class="lbl"> Date register:</span>
            <span class="val"> {{ order.dateRegister | date}} </span>
          </div>
          <div class="data-row order-date">
            <span class="lbl"> Date start:</span>
            <span class="val"> {{ order.dateRegister | date}} </span>
          </div>
        </div>
      </div>
      <div class="right-side side">
        <div class="button-container">
          <button>Details</button>
        </div>
        <div class="supervisor-data-section section">
          <div class="data-row">
            <span class="lbl">Supervisor:</span>
            <span class="val">{{ order.supervisor?.firstName }} {{ order.supervisor?.lastName }}</span>
          </div>
          <div class="data-row">
            <span class="lbl">Phone number:</span>
            <span class="val">{{ order.supervisor?.phoneNumber }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="progress-bar-container">
    <app-order-progress [config]="getProgressBarConfigFor(order)"></app-order-progress>
    </div>
  </div>
`,
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {

  @Input() order: Order;

  constructor() {
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
