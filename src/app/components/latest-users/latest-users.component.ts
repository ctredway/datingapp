import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginServiceService} from "../../_services/login-service.service";

@Component({
  selector: 'app-latest-users',
  templateUrl: './latest-users.component.html',
  styleUrls: ['./latest-users.component.css']
})
export class LatestUsersComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient, private loginSrvc: LoginServiceService)
  {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/Users').subscribe({
      next: response => this.users = response,
      error: error => {
        console.log(error);
      },
      complete: () => { console.log('users have been fetched')}
    });
  }
}
