import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-info',
  templateUrl: './servers-info.component.html',
  styleUrls: ['./servers-info.component.scss']
})
export class ServersInfoComponent implements OnInit {

  allowServerAdd = false;
  serverCreationMsg = `Add new server to show it's info...`;
  newServerName = 'Default';

  constructor() {
    setTimeout(() => {
      this.allowServerAdd = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreationMsg = `New server with name: ${this.newServerName} was added`;
  }

  onNewServerNameChange(event: any) {
    this.newServerName = event.target.value;
  }
}
