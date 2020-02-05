import { Component, OnInit } from '@angular/core';
import { AppSectionOption } from './app-section-option';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  appSections: AppSectionOption[] = [
    { link: '/home', title: 'Home', childs: [] },
    {
      link: '/orders', title: 'Orders', childs: [
        { link: '/orders/preview', title: 'Preview', childs: [] },
        { link: '/orders/register', title: 'Register', childs: [] }
      ]
    },
    { link: '/workers', title: 'Workers', childs: [] }
  ];

  ngOnInit(): void {

  }
}
