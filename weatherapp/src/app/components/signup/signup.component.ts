import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: SocialUser;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(SocialUser)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['user']));
  }
  signOut(): void {
    this.authService.signOut();
  }
  onSubmit(fullName, email, password) {
    let form = {
      fullName: fullName,
      email: email,
      password: password,
    }
    this.userService.registerUser(form)
      .subscribe((data: any) => {
        console.log("registered ", data);
        if (data.id) {
          window.location.href = '/user';
        }
      });
  }
}
