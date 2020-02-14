import { OrdersComponent } from './pages/orders.component';
import { OrderRegisterComponent } from './pages/order-register/order-register.component';
import { OrderDetailsComponent } from './pages/order-preview/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersResolverService } from './orders-resolver.service';
import { OrderPreviewComponent } from './pages/order-preview/order-preview.component';


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
    path: '',
    pathMatch: 'full',
    redirectTo: 'preview'
  },
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'preview',
        component: OrderPreviewComponent
      },
      {
        path: 'register',
        component: OrderRegisterComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
