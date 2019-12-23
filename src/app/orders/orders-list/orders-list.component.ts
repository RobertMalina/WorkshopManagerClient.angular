import { OrderService } from './../../../services/order-service';
import { Observable } from 'rxjs';
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

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.page = 0;
    this.ordersPerPage = 5;
  }

  onRefreshClick() {
    this.loadOrders();
  }

  onPageChange(event: any) {
    this.page = event;
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders(this.page, this.ordersPerPage)
      .subscribe(
        (data) => {
          console.log(data);
          this.orders = data.orders;
          this.totalOrdersCount = data.totalCount;
        },
        (error) => {
          console.error(error);
        });
  }

}
