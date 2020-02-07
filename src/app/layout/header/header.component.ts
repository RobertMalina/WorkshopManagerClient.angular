import { NavOptionsService } from './../../core/services/nav-options.service';
import { OptionsAuthFilterPipe } from './../../shared/pipes/options-auth-filter.pipe';
import { AuthService } from './../../core/services/auth.service';
import { AppSectionOption } from './../../core/models/app-section-option';
import { Component, OnInit } from '@angular/core';
import { AppRole } from 'src/app/core/authentication/app-role';

@Component({
  selector: 'app-header',
  template: `
  <header class="header">
  <div id="logo">LOGO</div>
  <nav>
    <app-nav-options [options]="options | optionsAuthFilter"></app-nav-options>
  </nav>
  </header>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private options: AppSectionOption[];

  constructor(private optionsService: NavOptionsService) { }

  ngOnInit(): void {
    this.optionsService.avaibleOptions.subscribe(options => {
      this.options = options;
    });
  }

}
