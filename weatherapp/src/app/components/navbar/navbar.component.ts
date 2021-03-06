import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }
  Logout() {
    if (this.userService.logout()) {
      window.location.href = "/login";
    }
  }
}
