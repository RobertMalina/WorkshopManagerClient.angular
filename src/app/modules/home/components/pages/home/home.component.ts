import { DescriptionsService } from './../../../../../core/services/descriptions.service';
import { Component, OnInit } from '@angular/core';
import { FeaturesInfo } from 'src/app/core/models/features-info';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  featuresData: FeaturesInfo;
  masonryOptions: NgxMasonryOptions;

  constructor(private descriptionService: DescriptionsService) {
    this.title = 'Product features';
    this.masonryOptions = {
      transitionDuration: '0.8s',
      fitWidth: true,
      columnWidth: 400,
      itemSelector: '.feature-masonry-item',
      gutter: 10
    };
  }

  ngOnInit(): void {
    this.loadFeatures();
  }

  loadFeatures() {
    this.descriptionService.featuresDescriptions()
      .subscribe(data => {
        this.featuresData = data;
      });
  }
}
