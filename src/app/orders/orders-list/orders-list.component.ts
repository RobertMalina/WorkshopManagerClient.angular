import { OrderService } from './../../../services/order-service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  page: number;
  ordersPerPage: number;
  totalOrdersCount: number;

  data: Observable<OrderPagedListSet> = null;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.page = 0;
    this.ordersPerPage = 5;
    this.data = this.orderService.getOrders(this.page, this.ordersPerPage);
    this.loadOrders();
  }

  onRefreshClick() {
    this.loadOrders();
  }

  onPageChange(event: any) {
    this.page = event;
    this.loadOrders();
  }

  setPagedListData(data: OrderPagedListSet) {
    console.log(data);
    this.orders = data.orders;
    this.totalOrdersCount = data.totalCount;
    this.loadMechanicians();
  }

  onDataFetchError(error: any) {

  }

  loadOrders() {
    this.orderService.getOrders(this.page, this.ordersPerPage)
      .subscribe(
        (data) => this.setPagedListData(data),
        (err) => this.onDataFetchError(err));
  }

  loadMechanicians() {
    const ordersIds: number[] = this.orders.map(o => o.id);

  }

}
