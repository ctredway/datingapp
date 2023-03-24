import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from 'rxjs';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'accounts/login',model).pipe(
      map((response: User) =>{
          const user = response;
          if(user){
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
            this.setCurrentUser(user);
          }
      })
    );
  }

  registerUser(model:any){
    return this.http.post<User>(this.baseUrl+'accounts/register',model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }
  getCurrentUser(){
    return this.currentUserSource;
  }
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
