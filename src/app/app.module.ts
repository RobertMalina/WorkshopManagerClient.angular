import { OrderService } from './../services/order-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../services/client-service';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrderRemoveComponent } from './orders/order-remove/order-remove.component';
import { OrderItemComponent } from './orders/orders-list/order-item/order-item.component';
import { NaviHeaderComponent } from './navi-header/navi-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    OrderRemoveComponent,
    OrderItemComponent,
    NaviHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    OrderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
