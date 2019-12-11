import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  address = '10.0.0.199';
  status = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getIpv4Addr() {
    return this.address;
  }

}
