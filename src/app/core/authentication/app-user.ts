import { AppRole } from './app-role';

export class AppUser {

  roles: AppRole[];

  constructor(public username: string, public token: string) { }

  setRoles(roles: AppRole[]) {
    this.roles = roles;
  }

}
