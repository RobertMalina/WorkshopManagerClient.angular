import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-preview',
  template: `<div id="order-preview-content">
  <p class="subfeature-title">
    {{ title | uppercase }}
  </p>
  <app-order-list></app-order-list>
</div>`,
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  title = 'Orders preview';

  constructor() { }

  ngOnInit() {
  }

}
