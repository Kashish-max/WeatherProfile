import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  isLoginError: boolean = false;

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
  onSubmit(email, password) {
    this.userService.userAuthentication(email, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.accessToken);
      this.router.navigate(['/user']);
    }, 
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      },
    );
  }
}
