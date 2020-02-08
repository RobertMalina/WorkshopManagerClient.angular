import { InvitationPanelComponent } from './modules/home/components/invitation-panel/invitation-panel.component';
import { HomeComponent } from './modules/home/components/pages/home/home.component';
import { AuthPageLayoutComponent } from './layout/auth-page/auth-page-layout.component';
import { AuthorizationGuard } from './core/guards/authorization.guard';
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
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('./modules/home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
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
