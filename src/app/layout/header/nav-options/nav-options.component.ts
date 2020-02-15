import { AppSectionOption } from './../../../core/models/app-section-option';
import { Component, OnInit, Input } from '@angular/core';
import { faCaretDown, faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-options',
  template: `

  <div class="responsive-helpers">
    <span *ngIf='!responsiveMenuExpanded' id="selected-option-name">
      {{ selectedOptionName | uppercase }}
    </span>
    <span class="responsive-menu-shortcut" (click)="responsiveMenuExpanded = !responsiveMenuExpanded">
      <fa-icon [ngClass]="" [icon]='responsiveMenuExpanded ? faChevronUpIcon : faBarsIcon'></fa-icon>
    </span>
  </div>

  <ul [ngClass]="responsiveMenuExpanded ? 'responsive expanded' : ''" class="menu">
    <ng-template #recursiveList let-options>
      <li *ngFor="let option of options"
        [ngClass]="option.childs ? 'sub-menu-container':''"
        [attr.title] ="option.title"
        #liElement
        (click)="onOptionClick(liElement.getAttribute('title'))">
        <ng-container
          [ngTemplateOutlet]="option.childs ? withChilds : single"
          [ngTemplateOutletContext]="{option:option}">
        </ng-container>
        <ul *ngIf="option.childs">
          <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: option.childs }"></ng-container>
        </ul>
      </li>
    </ng-template>
    <ng-container *ngTemplateOutlet="recursiveList; context:{ $implicit: options }">
    </ng-container>
  </ul>

  <ng-template #single let-option='option'>
    <a [routerLink]="[option.link]" routerLinkActive='active'>{{ option.title | uppercase }}</a>
  </ng-template>
  <ng-template #withChilds let-option='option'>
    <span><a  [routerLink]="[option.link]" routerLinkActive='active'>{{ option.title | uppercase }}</a> </span>
    <fa-icon [icon]="faCaretDownIcon"></fa-icon>
  </ng-template>
  `,
  styleUrls: ['./nav-options.component.scss']
})
export class NavOptionsComponent implements OnInit {

  @Input() options: AppSectionOption;

  faCaretDownIcon = faCaretDown;
  faBarsIcon = faBars;
  faChevronUpIcon = faChevronUp;
  renderedOptions: any;
  responsiveMenuExpanded: boolean;
  selectedOptionName = 'Home';

  constructor() { }

  onOptionClick(title: string) {
    console.log(title);
  }

  ngOnInit(): void {
  }

}
