import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as fontAwsItems } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
  ],
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [],
  exports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})

export class SharedModule { }
