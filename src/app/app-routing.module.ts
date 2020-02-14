import { OrdersComponent } from './modules/orders/pages/orders.component';
import { AuthGuard } from './core/guards/auth.guard';
import { InvitationPanelComponent } from './modules/home/components/invitation-panel/invitation-panel.component';
import { AuthPageLayoutComponent } from './layout/auth-page/auth-page-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthPageLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './modules/auth/auth-page.module#AuthPageModule'
      },
      {
        path: 'register',
        loadChildren: './modules/auth/auth-page.module#AuthPageModule'
      }
    ]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
