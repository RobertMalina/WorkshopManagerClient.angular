import { Component, OnInit, Input } from '@angular/core';
import { FeatureInfoDetails } from 'src/app/core/models/feature-info-details';

@Component({
  selector: 'app-feature-item',
  template: `
  <div class="feature-card-container">
    <div class="feature-card reversible" [ngClass]="reversed ? 'reversed' : ''">
      <div class="feature-card-side front">
        <h3 class="main-title" [innerHTML]="feature.title"></h3>
        <h4 class="subtitle" *ngIf="feature.subtitle"> {{ feature.subtitle }} </h4>
        <img [src]="feature.imgSrc" alt="feature.title" >
        <p class="description">
          {{ feature.description | limitedTextDisplay: 200 }}
        </p>
        <div class="card-controls">
          <button class="active" (click)='reversed = !reversed'>Read more</button>
          <button class="active" (click)='goToFeature(feature.path)'>Go to</button>
        </div>
      </div>
      <div class="feature-card-side back" *ngIf="reversed" [ngStyle]="{background: 'url(feature.imgSrc)'}">
        <h3 class="main-title" [innerHTML]="feature.title"></h3>
        <h4 class="subtitle" *ngIf="feature.subtitle"> {{ feature.subtitle }} </h4>
        <p class="description">
          {{ feature.description }}
        </p>
        <div class="card-controls">
          <button class="active" (click)='reversed = !reversed'>Read more</button>
          <button class="active" (click)='goToFeature(feature.path)'>Go to</button>
        </div>
      </div>
    </div>

  </div>`,
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {

  @Input() feature: FeatureInfoDetails;
  reversed = false;

  constructor() {

  }
  ngOnInit(): void {
  }

  goToFeature(route): void {
    console.log(route);
  }
}
