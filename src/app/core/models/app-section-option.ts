import { AppRole } from '../authentication/app-role';

export class AppSectionOption {
  title: string;
  link: string;
  childs?: AppSectionOption[];
  faIcon?: string;
  roles?: AppRole[];
}
