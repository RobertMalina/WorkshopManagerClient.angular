import { Order } from './../../../../../core/models/bussines-logic/order';
import { OrdersService } from './../../../../../core/services/bussines-logic/orders.service';
import { IOrderStatusFilters } from './../../../../../core/models/bussines-logic/i-order-status-filters';
import { map, filter, debounceTime, distinct, tap, flatMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, merge, Observable, fromEvent } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  faFilterIcon = faFilter;

  private listItemHeight = 200;
  private itemsOnPage = 5;
  private fetchNextDelayMs = 300;
  private loading = false;

  private cachedOrders: Order[][];

  statusFilters: IOrderStatusFilters;

  private scrollHandler$ = fromEvent(window, 'scroll')
    .pipe(
      map(() => window.scrollY),
      filter(height => height >= document.body.clientHeight - window.innerHeight),
      debounceTime(this.fetchNextDelayMs),
      distinct(),
      map(y => Math.ceil(
        (y + window.innerHeight) / (this.listItemHeight * this.itemsOnPage))
      )
    );

  private resizeHandler$ = fromEvent(window, 'resize')
    .pipe(
      debounceTime(this.fetchNextDelayMs),
      map(_ => Math.ceil(
        (window.innerHeight + document.body.scrollTop) / (this.listItemHeight * this.itemsOnPage)
      ))
    );

  private manualHandler$ = new BehaviorSubject(1);

  private pageToLoad$ = merge(
    this.manualHandler$,
    this.scrollHandler$,
    this.resizeHandler$)
    .pipe(
      distinct(),
      filter(page => this.cachedOrders[page - 1] === undefined)
    );

  itemResults$: Observable<Order[]> = this.pageToLoad$
    .pipe(
      tap(() => this.loading = true),
      flatMap((page: number) => {
        return this.ordersService.pagedOrders(page, this.itemsOnPage, this.statusFilters)
          .pipe(
            map((resp: Order[]) => resp),
            tap(resp => {
              this.cachedOrders[page - 1] = resp;
              if ((this.listItemHeight * this.itemsOnPage * page) < window.innerHeight) {
                this.manualHandler$.next(page + 1);
              }
            })
          );
      }),
      map(() => _.flatten(this.cachedOrders).filter(o => o !== undefined))
    );

  constructor(private ordersService: OrdersService) {
    this.cachedOrders = [];
    this.statusFilters = {
      finished: true,
      registered: true,
      inProgress: true
    };
  }


  ngOnInit() {

  }

  applyFilters() {

  }


}
