import { OrderService } from './../../../services/order-service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {


  constructor(private orderService: OrderService) { }

  pagedListData: Observable<OrderPagedListSet> = null;
  currentPage: number;
  ordersPerPage: number;

  ngOnInit() {
    this.currentPage = 0;
    this.ordersPerPage = 5;
    this.pagedListData = this.orderService.PagedListSet;
    this.getData();
  }

  ngOnDestroy() {

  }

  getData() {
    this.orderService.getPagedListSet(this.currentPage, this.ordersPerPage);
  }

  onRefreshClick() {

  }

  onPageChange(event: any) {

  }

}
