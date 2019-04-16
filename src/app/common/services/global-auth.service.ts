import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {

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
}
