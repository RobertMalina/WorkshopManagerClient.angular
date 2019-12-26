import { OrderService } from './../../../services/order-service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  orders: Order[];
  page: number;
  ordersPerPage: number;
  totalOrdersCount: number;

  pgListDataLoad: Subscription = null;

  data: any = this.orderService.getOrders(this.page, this.ordersPerPage);

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.page = 0;
    this.ordersPerPage = 5;
    this.loadOrders();
  }

  ngOnDestroy() {
    this.pgListDataLoad.unsubscribe();
  }

  onRefreshClick() {
    this.loadOrders();
  }

  onPageChange(event: any) {
    this.page = event;
    this.loadOrders();
  }

  private setPagedListData(data: OrderPagedListSet) {
    console.log(data);
    this.orders = data.orders;
    this.totalOrdersCount = data.totalCount;
    this.loadMechanicians();
  }

  private onDataFetchError(error: any) {
    console.error(error);
  }

  loadOrders() {

  }

  loadMechanicians() {
    const ordersIds: number[] = this.orders.map(o => o.id);

  }

}
