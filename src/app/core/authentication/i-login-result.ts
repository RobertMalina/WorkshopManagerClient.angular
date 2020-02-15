import { AppRole } from './app-role';
import { AppUser } from './app-user';

export interface ILoginResult {
  isAuthenticated: boolean;
  message?: string;
  username?: string;
  token?: string;
  roles?: string[];
}
