import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  invalidLogin: boolean = false;

  constructor(private loginService: LoginService) { }

  onSignIn(data: NgForm) {
    const credentials: Partial<User> = {
      email: data.form.value.email,
      password: data.form.value.password,
    };

    this.loginService.login(credentials).pipe(
      tap(() => {
        this.invalidLogin = false;
      }),
      catchError(() => {
        this.invalidLogin = true;
        return of();
      })
    ).subscribe();
  }

  onSignUp(data: NgForm) {
    const user: User = {
      name: data.form.value.name,
      password: data.form.value.password,
      email: data.form.value.email,
      mobileNumber: data.form.value.mobileNumber,
    };

    this.loginService.addUser(user).subscribe();
  }
}
