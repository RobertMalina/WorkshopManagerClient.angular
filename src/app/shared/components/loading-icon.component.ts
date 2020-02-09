import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-icon',
  template: `<div class="loading-icon" [ngClass]='locationClass'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
    `
  ,
  styleUrls: ['./loading-icon.component.scss']
})

export class LoadingIconComponent implements OnInit {

  @Input() locationClass: string;

  constructor() { }

  ngOnInit(): void {

  }
}
