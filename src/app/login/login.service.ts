import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './login.model';

const userUrl = `${environment.apiUrl}/users`;
const loginUrl = `${environment.apiUrl}/login`;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userSubject = new BehaviorSubject<String>('User');

  constructor(private http: HttpClient) { }

  setUserName(name: String) {
    this.userSubject.next(name);
  }

  getUserName(): Observable<String> {
    return this.userSubject.asObservable();
  }

  addUser(user: User): Observable<unknown> {
    return this.http.post(userUrl, user);
  }

  login(credentials: Partial<User>): Observable<unknown> {
    return this.http.post(loginUrl, credentials);
  }
}
