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
    this.userSwitchTest();
  }

  userSwitchTest() {
    // var array_name[:data type] = [val1,val2…valn]
    const s = new AppUser('supervisor01', 'some-token');
    s.setRoles(this.appRoles.supervisor);
    const r = new AppUser('regular01', 'some-token');
    r.setRoles(this.appRoles.regular);
    const m = new AppUser('mechanician01', 'some-token');
    m.setRoles(this.appRoles.mechanician);
    const a = new AppUser('anonymous_visitor', 'token-null');
    a.setRoles(this.appRoles.anonymous);

    const users: AppUser[] = [s, r, m, a];

    const usersLen = users.length;
    let index = 0;

    interval(20000).subscribe(() => {
      if (index === usersLen - 1) {
        index = 0;
      }
      this.switchUser(users[index]);
      console.log(users[index]);
      index++;
    });

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
