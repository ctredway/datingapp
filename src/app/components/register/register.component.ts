import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../_services/login-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(public loginSrvc: LoginServiceService) { }

  ngOnInit(): void {
  }

  doRegister(){
    this.loginSrvc.registerUser(this.model).subscribe({
      next: response => {
        console.log('resp: ', response);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
