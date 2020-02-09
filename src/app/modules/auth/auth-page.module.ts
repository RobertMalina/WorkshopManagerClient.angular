import { ServerErrorDisplayPipe } from './../../shared/pipes/server-error-display.pipe';
import { LoadingIconComponent } from './../../shared/components/loading-icon.component';
import { AuthPageRoutingModule } from './auth-page.routing';
import { AppLoginComponent } from './../auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppLoginComponent,
    LoadingIconComponent

  ],
  imports: [
    AuthPageRoutingModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [
    AppLoginComponent
  ]
})

export class AuthPageModule { }
