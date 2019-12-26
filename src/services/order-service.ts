import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'authkey',
      userid: '1'
    })
  };

  getOrder(id: number): Observable<Order[]> {
    const url = `http://${this.server}:${this.port}/${this.apiRoot}/${id}`;
    return this.httpClient.get<Order[]>(url);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getMechanicians(orderIds: number[]) {
    const url = `http://${this.server}:${this.port}/api/workers/engagedInOrders`;
    const body = {
      ordersIds: orderIds
    };
    return this.httpClient.post<Worker>(url, body,
      {
        headers: this.httpOptions.headers,
        responseType: 'json'
      })
      .pipe(

      );
  }

  getOrders(currentPage, ordersPerPage): Observable<OrderPagedListSet> {

    const url = `http://${this.server}:${this.port}/${this.apiRoot}/pagedListSet`;
    const body = {
      page: currentPage,
      itemsOnPage: ordersPerPage,
      archivedToo: false
    };
    return this.httpClient.post<OrderPagedListSet>(url, body,
      {
        headers: this.httpOptions.headers,
        responseType: 'json'
      })
      .pipe(

      );
  }
}
