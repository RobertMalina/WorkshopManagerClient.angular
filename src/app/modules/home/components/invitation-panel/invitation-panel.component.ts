import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation-panel',
  template: `
    <div id="invitation-panel">
    <div class="img"></div>
      <div id="skewed-overlay" ></div>
      <div id="content-container">
        <h2>Orders management & monitoring</h2>
        <p>System allows to register and maintain every new order and keep store information about all previous.</p>
      </div>
      <div class="img"></div>
    </div>
  `,
  styleUrls: ['./invitation-panel.component.scss']
})
export class InvitationPanelComponent { }
