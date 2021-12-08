import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  }
}
