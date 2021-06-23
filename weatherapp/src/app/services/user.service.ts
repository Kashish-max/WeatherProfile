import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs';
import { User } from '../signup/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly rootUrl = 'http://localhost:3600';
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: User) {
    let body = {
      fullName: user.fullName,
      password: user.password,
      email: user.email,
    }
    var reqHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post(this.rootUrl + '/users', JSON.stringify(body), { headers: reqHeader });
  }

  userAuthentication(email, password) {
    let body = {
      email: email,
      password: password,
    }
    var reqHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post(this.rootUrl + '/auth', JSON.stringify(body), { headers: reqHeader });
  }

  getUserClaims(userEmail) {
    return this.http.get(this.rootUrl + '/users/email/' + userEmail
    , { headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('userToken')})});
  }

}