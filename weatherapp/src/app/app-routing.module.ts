import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import { StartupComponent } from './components/startup/startup.component'
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component'
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthhomeGuard } from './guards/authhome/authhome.guard';
import { GauthGuard } from './guards/gauth/gauth.guard';

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
