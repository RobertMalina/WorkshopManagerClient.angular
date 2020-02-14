import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  faFilterIcon = faFilter;

  private itemHeight = 150;
  private itemOnPage = 5;

  constructor() { }

  ngOnInit() {
  }

  applyFilters() {

  }
}
