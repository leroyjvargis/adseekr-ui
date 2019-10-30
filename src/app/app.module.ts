
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
} from '@nebular/auth';

import { AuthGuard } from './auth-guard.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
          },
          baseEndpoint: '',
          login: {
            // ...
            endpoint: environment.baseUrl + 'auth/login',
            method: 'post',
          },
          register: {
            // ...
            endpoint: environment.baseUrl + 'auth/register',
            method: 'post',
            // tslint:disable-next-line: max-line-length
            defaultMessages: ['Registration successful! Please activate your account by visiting the link in the confirmation email before logging in.'],
          },
          logout: {
            endpoint: '',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500,
          strategy: 'email',
          rememberMe: true,
          showMessages: {
            success: true,
            error: true,
          },
        },
        logout: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
        },
        register: {
          redirectDelay: 5000,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          terms: false,
        },
      },
    }),
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true},
    { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: function () { return false; } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
