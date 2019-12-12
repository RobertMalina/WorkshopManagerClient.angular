import { SuccessAlertComponent } from './../success-alert/success-alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from '../warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersInfoComponent } from './servers-info/servers-info.component';
import { OrderRegisterFormComponent } from './order-register-form/order-register-form.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../services/client-service';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersInfoComponent,
    OrderRegisterFormComponent
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
    ClientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
