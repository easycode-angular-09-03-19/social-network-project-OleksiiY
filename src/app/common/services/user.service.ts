import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserStoreService } from './current-user-store.service';
import { GlobalAuthService } from './global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) { }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  uploadCover(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('coverImg', file);
    const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData);
  }

  getUserImages() {
    return this.http.get(`${this.apiUrl}/public/users/my-images/5c813af1120080255c5599b2`);
  }
}
