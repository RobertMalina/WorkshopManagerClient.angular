import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { AuthPageLayoutComponent } from './layout/auth-page/auth-page-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavOptionsComponent } from './layout/header/nav-options/nav-options.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthPageLayoutComponent,
    NavOptionsComponent,
    HeaderComponent,
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
