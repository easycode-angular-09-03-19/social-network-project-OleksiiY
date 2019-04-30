import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalAuthService } from '../services/global-auth.service';

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
    if (!this.globalAuthService.isLogin) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

}
