import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/users/notification`);
  }

}
