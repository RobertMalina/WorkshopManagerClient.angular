import { AuthPageRoutingModule } from './auth-page.routing';
import { AppLoginComponent } from './../auth/pages/login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    AuthPageRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    AppLoginComponent
  ]
})

export class AuthPageModule { }
