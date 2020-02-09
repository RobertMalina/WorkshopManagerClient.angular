import { config } from './../config.constants';
import { AppRolesContract } from './../authentication/app-roles-contract';
import { RolesService } from './roles.service';
import { Observable, Subject, interval, BehaviorSubject } from 'rxjs';
import { AppUser } from './../authentication/app-user';
import { Injectable } from '@angular/core';
import { AppRole } from '../authentication/app-role';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedUserStorageKey = 'loggedUser';
  private anonymous: AppUser;
  loggedUser: BehaviorSubject<AppUser>;
  private appRoles: AppRolesContract;

  constructor(private httpClient: HttpClient, private rolesService: RolesService) {
    this.anonymous = new AppUser('anonymous_visitor', 'token-null', rolesService.getAnonymousRoles());
    this.bootAuthState();
    this.appRoles = rolesService.getRolesContract();
  }

  private bootAuthState(): void {
    const user: AppUser = this.tryGetUserFromLocal();
    if (user) {
      this.loggedUser = new BehaviorSubject<AppUser>(user);
    } else {
      this.loggedUser = new BehaviorSubject<AppUser>(this.anonymous);
    }
  }

  private tryGetUserFromLocal(): AppUser {
    return JSON.parse(localStorage.getItem(this.loggedUserStorageKey));
  }

  private persistUserInLocal(user: AppUser): void {
    localStorage.setItem('loggedUser', JSON.stringify(user));  // zachowa stan na wypadek odświeżenia strony
  }

  private switchUser(user: AppUser): AppUser {
    this.loggedUser.next(user);
    return user;
  }

  public getCurrentUser(): AppUser {
    return this.loggedUser.value;
  }

  login(username: string, password: string): Observable<AppUser> {
    return this.httpClient.post<AppUser>(`${config.apiUrl}/auth/login`,
      { Username: username, Password: password })
      .pipe(
        map(user => {
          console.log(user);
          if (user && user.token) {
            this.persistUserInLocal(user);
            this.switchUser(user);
          }
          return user;
        }));
  }

  logout() {
    this.persistUserInLocal(this.anonymous);
    this.loggedUser.next(this.anonymous);
  }
}
