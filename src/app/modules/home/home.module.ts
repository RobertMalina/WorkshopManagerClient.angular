import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { InvitationPanelComponent } from './components/invitation-panel/invitation-panel.component';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent,
    InvitationPanelComponent,
    FeatureItemComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [

  ]
})

export class HomeModule { }
