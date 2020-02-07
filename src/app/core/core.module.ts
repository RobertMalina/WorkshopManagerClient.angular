import { RouterModule } from '@angular/router';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    AuthorizationGuard
  ],
  exports: [
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
