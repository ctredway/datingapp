import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "./_services/login-service.service";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Users';


  constructor(private http: HttpClient, private loginSrvc: LoginServiceService)
  {

  }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userStr = localStorage.getItem('user');
    if(!userStr) return;
    const user: User = JSON.parse(userStr);
    this.loginSrvc.setCurrentUser(user);
  }
}
