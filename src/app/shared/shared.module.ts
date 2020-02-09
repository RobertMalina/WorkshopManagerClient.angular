import { ServerErrorDisplayPipe } from './pipes/server-error-display.pipe';
import { LoadingIconComponent } from './components/loading-icon.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as fontAwsItems } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    ServerErrorDisplayPipe
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
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
