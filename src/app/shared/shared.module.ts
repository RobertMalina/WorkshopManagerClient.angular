import { LogoutComponent } from './components/logout/logout.component';
import { LimitedTextDisplayPipe } from './pipes/limited-text-display.pipe';
import { ServerErrorDisplayPipe } from './pipes/server-error-display.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { library as fontAwsItems } from '@fortawesome/fontawesome-svg-core';


@NgModule({
  declarations: [
    ServerErrorDisplayPipe,
    LimitedTextDisplayPipe,
    LogoutComponent
  ],
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ServerErrorDisplayPipe,
    LimitedTextDisplayPipe,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule
  ]
})

export class SharedModule { }
