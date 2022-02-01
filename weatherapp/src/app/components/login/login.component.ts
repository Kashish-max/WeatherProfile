import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  isLoginError: boolean = false;
  islocationAllowed: boolean = false;

  creds;

  constructor(private authService: SocialAuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['/user']));
  }
  signOut(): void {
    this.authService.signOut();
  }

  authenticate(email, password) {
    this.userService.userAuthentication(email, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.accessToken);
      localStorage.setItem('userEmail', email);
      window.location.href = "/user";
    }, 
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      },
    );
  }

  handleLoctionError(error) {
    this.islocationAllowed = false;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        break;
    }
  }

  onSubmit(email, password) {
    if (navigator.geolocation) {  
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.islocationAllowed = true;
          this.authenticate(email, password);          
        }
      }, this.handleLoctionError)
    }
  }
}
