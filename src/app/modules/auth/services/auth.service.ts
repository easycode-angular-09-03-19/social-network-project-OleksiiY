import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginServerAnswer } from '../interfaces/LoginServerAnswer';
import { SignUpServerAnswer } from '../interfaces/SignUpServerAnswer';
import { ResetPasswordServerAnswer } from '../interfaces/ResetPasswordServerAnswer';

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  login(cred): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }

  signUp(data): Observable<SignUpServerAnswer> {
    return this.http.post<SignUpServerAnswer>(`${this.apiUrl}/public/auth/signup`, data);
  }

  resetPassword(email): Observable<ResetPasswordServerAnswer> {
    return this.http.post<ResetPasswordServerAnswer>(`${this.apiUrl}/public/auth/reset-password`, email);
  }

}
