import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../_services/login-service.service";
import {User} from "../../models/User";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model:any = {};
  constructor(public loginSrvc: LoginServiceService) { }

  ngOnInit(): void {

  }

  login() {
    this.loginSrvc.login(this.model).subscribe({
      next: response => {
        console.log('resp: ', response);
      },
      error: error => {
        console.error(error);
      }
    })
  }

  logOut(){
    this.loginSrvc.logout();
  }
}
