import { OrderProgressBarConfig } from './../../../../../../../core/models/bussines-logic/order-progressbar-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-progress',
  template: `
  <div class="order-progress-bar">
    <div class="bars-container">
      <div title="spent time" [style.width]="spentTimeBarLenght" class="spent-time-bar time-bar"></div>
      <div title="estimated time" [style.width]="estimatedTimeBarLenght" class="estimated-time-bar time-bar"></div>
    </div>
    <div class="labels-container">
      <div id="time-spent" class="time-label-set">
        <span>Spent time: </span>
        <span> {{ config.spentTime }} h </span>
      </div>
      <div id="time-estimated" class="time-label-set">
        <span>Estimated time: </span>
        <span> {{ config.estimatedTime }} h </span>
      </div>
    </div>


  </div>`,
  styleUrls: ['./order-progress.component.scss']
})
export class OrderProgressComponent implements OnInit {

  @Input() config: OrderProgressBarConfig;

  estimatedTimeBarLenght: string;
  spentTimeBarLenght: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.setBarsLengths(), 500);
  }

  setBarsLengths() {
    this.estimatedTimeBarLenght = '100%';
    this.spentTimeBarLenght = '75%';
  }

}
