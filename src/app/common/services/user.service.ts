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
  ) {
  }

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

  uploadPhotos(files: any[]) {
    const formData = new FormData();
    files.forEach((file) => formData.append('userPhotos', file));
    const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
  }

  getUserImages() {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-images/${id}`);
  }

  getFavouritesImages() {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-favorites/${id}?part=1&limit=20`);
  }

  getFollowers() {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followings`);
  }

  getFollowings() {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followers`);
  }

  updateFollower(id) {
    const body = {};
    return this.http.put(`${this.apiUrl}/public/users/following/${id}`, body);
  }

}
