import { AppRole } from './app-role';

export class AppRolesContract {
  anonymous: AppRole[];
  regular: AppRole[];
  supervisor: AppRole[];
  mechanician: AppRole[];
  administrator: AppRole[];

  constructor() {
    this.anonymous = [new AppRole('anonymous')];
    this.regular = [new AppRole('regular')];
    this.mechanician = [
      new AppRole('regular'),
      new AppRole('mechanician')];
    this.supervisor = [
      new AppRole('regular'),
      new AppRole('supervisor')
    ];
    this.administrator = [
      new AppRole('regular'),
      new AppRole('supervisor')
    ];
  }
}
