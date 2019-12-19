import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

  // TODO
  port: number;
  server: string;
  apiRoot: string;

  loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.port = 4210; // 4110 -> port serwera proxy
    this.apiRoot = 'api/orders';
    this.server = 'localhost';
    this.loading = false;
  }

  getOrder(id: number): Observable<Order[]> {
    const url = `http://${this.server}:${this.port}/${this.apiRoot}/${id}`;
    return this.httpClient.get<Order[]>(url);
  }

  getOrders(): Observable<Order[]> {
    const url = `http://${this.server}:${this.port}/${this.apiRoot}`;
    return this.httpClient.get<Order[]>(url);
  }
}
