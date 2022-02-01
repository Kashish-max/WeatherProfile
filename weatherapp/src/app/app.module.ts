import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { StartupComponent } from './components/startup/startup.component';
import { ChartsModule } from 'ng2-charts';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user/user.service';
import { AuthhomeGuard } from './guards/authhome/authhome.guard';
import { GauthGuard } from './guards/gauth/gauth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StartupComponent,
    ChartLineComponent,
    SearchComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AutocompleteLibModule,
  ],
  providers: [
    AuthGuard,
    AuthhomeGuard,
    GauthGuard,
    UserService,
    [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '303065422443-1gevcv85hpb2cfj1k0mi0fgfe0id646u.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
