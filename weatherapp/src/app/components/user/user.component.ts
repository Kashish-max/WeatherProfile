import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user;
  islocationAllowed: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (navigator.geolocation) {  
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.islocationAllowed = true;
        }
      }, (err) => {
        this.islocationAllowed = false;
        console.log(err);
      })
    }
    if (this.userService.getToken()) {
      this.userService.getUserClaims(this.userService.getEmail()).subscribe((data: any) => {
          this.user = data;
        },
          (err: HttpErrorResponse) => {
            console.log(err);
        },
      );
    } else {
      window.location.href = "/login";
    }
  }
  Logout() {
    if (this.userService.logout()) {
      // this.router.navigate(['/login'])
      window.location.href = "/login";
    }
  }
}
