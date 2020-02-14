import { OrdersService } from './../../core/services/bussines-logic/orders.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Order } from 'src/app/core/models/bussines-logic/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolverService implements Resolve<Order> {

  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Order | Observable<Order> {
    throw new Error('Method not implemented.');
  }

}
