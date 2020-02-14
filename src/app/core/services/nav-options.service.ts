import { AppUser } from './../authentication/app-user';
import { AuthService } from './auth.service';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { AppRole } from './../authentication/app-role';
import { AppSectionOption } from './../models/app-section-option';
import { Injectable } from '@angular/core';
import { matchRoles, RolesService } from './roles.service';

@Injectable({
  providedIn: 'root'
})

export class NavOptionsService {

  private definitions: AppSectionOption[];

  avaibleOptions: ReplaySubject<AppSectionOption[]>;

  constructor(private authService: AuthService, private rolesService: RolesService) {
    this.avaibleOptions = new ReplaySubject<AppSectionOption[]>(1);

    this.authService.loggedUser.subscribe(user => {
      this.initializeDefinitions();
      this.adjustAvaibleOptionsFor(user);
    });
  }

  private initializeDefinitions() {
    const roles = this.rolesService.getRolesContract();
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
        link: '/orders', title: 'Orders', roles: roles.anonymous,
        childs: [
          { link: '/orders/preview', title: 'Preview', roles: roles.anonymous },
          { link: '/orders/register', title: 'Register', roles: roles.anonymous }
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
  }

  authFilter(options: AppSectionOption[], userRoles: AppRole[]): AppSectionOption[] {
    return options.filter(
      option => {
        if (option.childs) {
          option.childs = this.authFilter(option.childs, userRoles);
          if (option.childs.length === 0) {
            option.childs = null;
          }
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
    this.avaibleOptions.next(options);
  }
}
