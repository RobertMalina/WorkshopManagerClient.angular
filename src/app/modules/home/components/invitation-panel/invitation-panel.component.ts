import { InvitationPanelInfo } from './../../../../core/models/invitation-panel-info';
import { DescriptionsService } from './../../../../core/services/descriptions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-panel',
  template: `
    <div id="invitation-panel">
    <div class="img"></div>
      <div id="skewed-overlay" >
        <div id="content-container">
          <h2>{{ content.title }}</h2>
          <p>{{ content.description }}</p>
        </div>
      </div>
      <div class="img"></div>
    </div>
  `,
  styleUrls: ['./invitation-panel.component.scss']
})
export class InvitationPanelComponent implements OnInit {

  content: InvitationPanelInfo;

  constructor(private descriptionService: DescriptionsService) {
    this.loadContent();
  }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.descriptionService.invitationPanel()
      .subscribe(data => {
        this.content = data;
      });
  }
}
