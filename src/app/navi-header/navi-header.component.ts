import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi-header',
  templateUrl: './navi-header.component.html',
  styleUrls: ['./navi-header.component.scss']
})
export class NaviHeaderComponent implements OnInit {

  collapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
