import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-info',
  templateUrl: './servers-info.component.html',
  styleUrls: ['./servers-info.component.scss']
})
export class ServersInfoComponent implements OnInit {

  allowServerAdd = false;
  serverCreationMsg = `Add new server to show it's info...`;

  constructor() {
    setTimeout(() => {
      this.allowServerAdd = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreationMsg = 'New server was added';
  }
}
