import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {GlobalAuthService} from '../commonServices/global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private globalAuthService: GlobalAuthService
  ) {
  }
  canActivate() {
    if (this.globalAuthService.isLogin) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
