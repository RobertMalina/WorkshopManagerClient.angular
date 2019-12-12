import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

  // TODO
  port: number;
  server: string;
  apiRoot: string;

  loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.port = 4110; // adres serwera proxy
    this.apiRoot = 'api/clients';
    this.server = 'localhost';

    this.loading = false;
  }

  findClientByPhoneNumber(phoneNumber: string): Observable<Client> {
    const url = `http://${this.server}:${this.port}/${this.apiRoot}/${phoneNumber}`;
    return this.httpClient.get(url);
  }
}
