import { OrderProgressBarConfig } from './../../../../../../../core/models/bussines-logic/order-progressbar-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-progress',
  template: `
  <div class="progress-bar-container">
    <div class="spent-time-bar time-bar"></div>
    <div class="estimated-time-bar time-bar"></div>
  </div>`,
  styleUrls: ['./order-progress.component.scss']
})
export class OrderProgressComponent implements OnInit {

  @Input() config: OrderProgressBarConfig;

  estimatedTimeBarLenght: string;
  spentTimeBarLenght: string;

  constructor() { }

  ngOnInit() {
  }

  setBarsLengths() {
    this.estimatedTimeBarLenght = '100%';
    this.spentTimeBarLenght = '75%';
  }

}
