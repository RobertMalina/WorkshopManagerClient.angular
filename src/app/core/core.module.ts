import { UnauthorizedRequestErrorInterceptor } from './interceptors/unauth-request.interceptor';
import { JWTAttachInterceptor } from './interceptors/jwt-token-attach.interceptor';
import { RouterModule } from '@angular/router';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JWTAttachInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedRequestErrorInterceptor, multi: true },
  ],
  exports: [
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
