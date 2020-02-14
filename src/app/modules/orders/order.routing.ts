import { OrderRegisterComponent } from './pages/order-register/order-register.component';
import { OrderListComponent } from './pages/order-preview/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/order-preview/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersResolverService } from './orders-resolver.service';


export const routes: Routes = [
  {
    path: 'preview/:id',
    pathMatch: 'full',
    component: OrderDetailsComponent,
    resolve: {
      order: OrdersResolverService
    }
  },
  {
    path: 'preview',
    component: OrderListComponent
  },
  {
    path: 'register',
    component: OrderRegisterComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'preview'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
