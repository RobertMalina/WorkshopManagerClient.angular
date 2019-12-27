import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, filter, tap } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Injectable()
export class OrderService {

  // TODO
  port: number;
  server: string;
  apiRoot: string;
  loading: boolean;

  private pagedListSubject = new Rx.ReplaySubject<OrderPagedListSet>(1);
  PagedListSet: Observable<OrderPagedListSet> = this.pagedListSubject.asObservable();

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
    return throwError(
      'Something bad happened; please try again later.');
  }


  getPagedListSet(currentPage, ordersPerPage): void {
    const url = `http://${this.server}:${this.port}/${this.apiRoot}/pagedListSet`;
    const body = {
      page: currentPage - 1,
      itemsOnPage: ordersPerPage,
      archivedToo: false
    };

    this.httpClient.post<OrderPagedListSet>(url, body, this.httpOptions)
      .pipe(
        tap(read => console.log(read)),
        catchError(err => this.handleError(err))
      )
      .subscribe((response) => {
        this.pagedListSubject.next(response);
      });
  }
}
