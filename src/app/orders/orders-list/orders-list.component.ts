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

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  onRefreshClick() {
    this.getUnArchivizedOrders();
  }

  getUnArchivizedOrders() {
    this.orderService.getOrders()
      .subscribe(
        (data) => {
          this.orders = data;
        },
        (error) => {
          console.error(error);
        });
  }

}
