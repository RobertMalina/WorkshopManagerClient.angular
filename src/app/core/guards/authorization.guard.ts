import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    const user = this.authService.getCurrentUser();
    if (user) {
      return true;
    } else {
      this.router.navigate(['auth/login', { queryParams: { returnUrl: routeState.url } }])
      return false;
    }
  }
}
