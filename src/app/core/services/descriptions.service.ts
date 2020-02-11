import { InvitationPanelInfo } from './../models/invitation-panel-info';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import featuresJSON from '../../../assets/descriptions/features-desc.json';
import invitationPanelJSON from '../../../assets/descriptions/invitation-panel.json';
import { FeaturesInfo } from '../models/features-info.js';
import { FeatureInfoDetails } from '../models/feature-info-details.js';

@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {

  constructor() {

  }

  featuresDescriptions(): Observable<FeaturesInfo> {
    return of(featuresJSON);
  }

  featuresDescription(featureId?: number): Observable<FeatureInfoDetails> {
    return of(featuresJSON.systemFeatures[featureId]);
  }

  invitationPanel(): Observable<InvitationPanelInfo> {
    return of(invitationPanelJSON);
  }
}
