import { AppUser } from './../authentication/app-user';
import { AuthService } from './auth.service';
import { Observable, Subject } from 'rxjs';
import { AppRole } from './../authentication/app-role';
import { AppSectionOption } from './../models/app-section-option';
import { Injectable } from '@angular/core';
import { matchRoles, RolesService } from './roles.service';

@Injectable({
  providedIn: 'root'
})

export class NavOptionsService {

  private definitions: AppSectionOption[];

  avaibleOptions: Subject<AppSectionOption[]>;

  constructor(private authService: AuthService, private rolesService: RolesService) {
    this.avaibleOptions = new Subject<AppSectionOption[]>();
    const roles = rolesService.getRolesContract();

    this.definitions = [
      { link: '/auth/register', title: 'Register', roles: roles.anonymous },
      { link: '/auth/login', title: 'Log-in', roles: roles.anonymous },
      { link: '/home', title: 'Home' },
      {
        link: '/account', title: 'Account', roles: roles.regular,
        childs: [
          { link: '/account/manage', title: 'Manage', roles: roles.regular },
          { link: '/account/login', title: 'Log-out', roles: roles.regular }
        ]
      },
      {
        link: '/orders', title: 'Orders', roles: roles.supervisor,
        childs: [
          { link: '/orders/preview', title: 'Preview', roles: roles.supervisor },
          { link: '/orders/register', title: 'Register', roles: roles.supervisor }
        ]
      },
      {
        link: '/workers', title: 'Workers', roles: roles.supervisor, childs: [
          { link: '/workers/manage', title: 'Manage', roles: roles.supervisor },
          { link: '/workers/register', title: 'Register', roles: roles.administrator }
        ]
      },
      { link: '/raports', title: 'Log Raport', roles: roles.mechanician }
    ];

    this.authService.loggedUser.subscribe(user => {
      this.adjustAvaibleOptionsFor(user);
    });
  }

  authFilter(options: AppSectionOption[], userRoles: AppRole[]): AppSectionOption[] {
    let newChilds: AppSectionOption[];
    return options.filter(
      option => {
        if (option.childs) {
          newChilds = this.authFilter(option.childs, userRoles);
          option.childs = newChilds.length > 0 ? newChilds : null;
        }
        if (option.roles) {
          return matchRoles(userRoles, option.roles);
        } else {
          return true;
        }
      }
    );
  }

  adjustAvaibleOptionsFor(user: AppUser): void {
    const userRoles = user.roles;
    const options = this.authFilter(this.definitions, userRoles);
    console.log(options);
    this.avaibleOptions.next(options);
  }
}
