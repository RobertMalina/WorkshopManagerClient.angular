import { ILoginResult } from './i-login-result';
import { AppRole } from './app-role';

export class AppUser {

  roles: AppRole[];

  constructor(public username: string, public token: string, roles?: AppRole[]) {
    if (roles) {
      this.setRoles(roles);
    }
  }

  setRoles(roles: AppRole[]) {
    this.roles = roles;
  }

}
