import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  message: 'Be carefull, she is beauty as fuck.';

  ngOnInit() {
  }

}
