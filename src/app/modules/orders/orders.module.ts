import { OrderDetailsComponent } from './pages/order-preview/order-details/order-details.component';
import { OrderRegisterFormComponent } from './pages/order-register/order-register-form/order-register-form.component';
import { OrderSummaryComponent } from './pages/order-register/order-summary/order-summary.component';
import { OrderFilterComponent } from './pages/order-preview/order-list/order-filter/order-filter.component';
import { OrderClientFormComponent } from './components/order-client-form/order-client-form.component';
import { OrderListComponent } from './pages/order-preview/order-list/order-list.component';
import { OrdersRoutingModule } from './order.routing';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './pages/orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderPreviewComponent } from './pages/order-preview/order-preview.component';
import { OrderRegisterComponent } from './pages/order-register/order-register.component';
import { OrderListItemComponent } from './pages/order-preview/order-list/order-list-item/order-list-item.component';
import { OrderProgressComponent } from './pages/order-preview/order-list/order-list-item/order-progress/order-progress.component';

@NgModule({
  declarations: [
    OrdersComponent,

    OrderPreviewComponent,
    OrderListComponent,
    OrderFilterComponent,
    OrderListItemComponent,
    OrderProgressComponent,
    OrderDetailsComponent,

    OrderRegisterComponent,
    OrderRegisterFormComponent,
    OrderClientFormComponent,
    OrderSummaryComponent
  ],
  imports: [
    SharedModule,
    NgxPaginationModule,
    OrdersRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    OrdersComponent
  ]
})

export class OrdersModule { }
