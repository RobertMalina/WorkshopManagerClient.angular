import { NgModule } from '@angular/core';
import { OrdersComponent } from './pages/orders/orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    SharedModule,
    NgxPaginationModule
  ],
  providers: [

  ],
  bootstrap: [
    OrdersComponent
  ]
})

export class OrdersModule { }
