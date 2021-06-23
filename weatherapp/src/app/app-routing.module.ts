import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component'
import { AuthGuard } from './auth/auth.guard';
import { AuthhomeGuard } from './authhome/authhome.guard';
import { GauthGuard } from './gauth/gauth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthhomeGuard] },
  { path: '', component: SearchComponent, canActivate: [AuthhomeGuard],},
  { path: 'user', component: UserComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
