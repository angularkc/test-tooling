import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: '<button (click)="login()">Log in</button>',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
    if (auth.isAuthed) {
      router.navigate(['']);
    }
  }
  ngOnInit() {}
  login() {
    this.auth.login();
    this.router.navigate(['']);
  }

}
