import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {

  constructor() { }

  get isLogin(): boolean {
    if (localStorage.getItem('sn_app_token')){
      return true;
    } else {
    return false;
    }
  }
}
