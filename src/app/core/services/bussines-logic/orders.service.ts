import { Order } from './../../models/bussines-logic/order';
import { IPagedOrders } from './../../models/bussines-logic/i-paged-orders';
import { config } from './../../config.constants';
import { IOrderStatusFilters } from './../../models/bussines-logic/i-order-status-filters';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersSubject$: BehaviorSubject<Order[]> = new BehaviorSubject([]);

  public orders$: Observable<Order[]> = this.ordersSubject$.asObservable();

  private httpHeaders = {
    headers: new HttpHeaders({
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    })
  };



  constructor(private httpClient: HttpClient) { }


  pagedOrders(page: number, itemsOnPage: number, statusFilters?: IOrderStatusFilters): Observable<Order[]> {
    page = page - 1;
    return this.httpClient.post<IPagedOrders>(`${config.getApiUrl()}/orders/paged`,
      { page, itemsOnPage, statusFilters }, this.httpHeaders)
      .pipe(
        map(response => response.orders),
        catchError(err => of(err)));
  }

  loadOrders(page: number, itemsOnPage: number, statusFilters?: IOrderStatusFilters) {
    console.log('orders-load-start');

    this.httpClient.post<IPagedOrders>(`${config.getApiUrl()}/orders/paged`,
      { page, itemsOnPage, statusFilters }, this.httpHeaders)
      .pipe(
        map(response => response.orders),
        catchError(err => of(err)))
      .subscribe(orders => this.ordersSubject$.next(orders));
  }

}
