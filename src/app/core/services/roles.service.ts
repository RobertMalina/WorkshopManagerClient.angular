import { AppRole } from 'src/app/core/authentication/app-role';
import { AppRolesContract } from './../authentication/app-roles-contract';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RolesService {

  roles: AppRolesContract;

  constructor() {
    this.roles = new AppRolesContract();
  }

  getRolesContract(): AppRolesContract {
    return this.roles;
  }

  getAnonymousRoles(): AppRole[] {
    return this.roles.anonymous;
  }
}

export function matchRoles(userRoles: AppRole[], requiredRoles: AppRole[]): boolean {
  const possesed = userRoles.map(role => role.name);
  return requiredRoles
    .map(role => role.name)
    .map(name => possesed.indexOf(name) !== -1 ? 1 : 0)
    .every(result => result === 1);
}
