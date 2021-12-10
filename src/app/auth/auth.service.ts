import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return 'abc';
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null ? true : false;
  }

  public logout() {
    // remove token
  }
}
