import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getNotifications() {
    return this.http.get(`${this.apiUrl}/public/users/notification`);
  }

}
