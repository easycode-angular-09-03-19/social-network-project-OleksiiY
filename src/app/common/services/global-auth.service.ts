import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() { }

  public get isLogin(): boolean {
    if (localStorage.getItem('sn_app_token')) {
      return true;
    } else {
    return false;
    }
  }

  public get token() {
    return localStorage.getItem('sn_app_token') || '';
  }

  public get userId() {
    return this.token ? this.jwtHelper.decodeToken(this.token).id : null;
  }

}
