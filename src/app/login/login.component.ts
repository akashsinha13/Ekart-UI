import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSignIn() {

  }

  onSignUp(formData) {
    let user: User = {
      name: formData.form.value.name,
      password: formData.form.value.password,
      email: formData.form.value.email,
      mobileNumber: formData.form.value.mobileNumber,
    }

    alert(user);
  }
}
