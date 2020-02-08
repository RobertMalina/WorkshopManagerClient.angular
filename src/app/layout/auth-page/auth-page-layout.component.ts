import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page-layout',
  template: `
  <div class="auth-layout-container">
    <div class="content-container">
      <div id="overlay"></div>
      <router-outlet></router-outlet>
    </div>
  </div>
`,
  styleUrls: ['./auth-page-layout.component.scss']
})
export class AuthPageLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
