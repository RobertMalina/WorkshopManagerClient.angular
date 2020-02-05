import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
  <div class="layout-container main">
  <app-header></app-header>
  <div class="content-container">
    <router-outlet></router-outlet>
  </div>
  </div>
`,
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
