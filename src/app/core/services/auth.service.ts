import { AppRolesContract } from './../authentication/app-roles-contract';
import { RolesService } from './roles.service';
import { Observable, Subject, interval } from 'rxjs';
import { AppUser } from './../authentication/app-user';
import { Injectable } from '@angular/core';
import { AppRole } from '../authentication/app-role';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedUser: Subject<AppUser>;
  private appRoles: AppRolesContract;

  constructor(private rolesService: RolesService) {
    this.loggedUser = new Subject<AppUser>();
    this.appRoles = rolesService.getRolesContract();

    setTimeout(() => {
      this.setAnonymousUser();
    }, 1000);
  }

  switchUser(user: AppUser): AppUser {
    this.loggedUser.next(user);
    return user;
  }

  setAnonymousUser(): void {
    const anonymous = new AppUser('anonymous_visitor', 'token-null');
    anonymous.setRoles(this.rolesService.getAnonymousRoles());
    this.loggedUser.next(anonymous);
  }

  login(): void {
    //switchUser(user);
  }
}
