import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-info',
  templateUrl: './servers-info.component.html',
  styleUrls: ['./servers-info.component.scss']
})
export class ServersInfoComponent implements OnInit {

  display = true;
  clickLogs = [];
  startTime: number = Date.now();

  constructor() {

  }

  onBtnClick() {
    this.display = !this.display;
    this.logClick();
  }

  ngOnInit() {
  }

  logClick() {
    const clickTimespan = (Date.now() - this.startTime) / 1000;
    this.clickLogs.push(clickTimespan);
  }

  getLogIndex(log) {
    return this.clickLogs.indexOf(log);

  }

}
