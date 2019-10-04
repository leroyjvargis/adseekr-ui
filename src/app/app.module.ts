
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  NbDummyAuthStrategy,
  NbAuthJWTToken,
  NbAuthSimpleToken,
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
        // NbDummyAuthStrategy.setup({
        //   name: 'email',
        // }),
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthSimpleToken,
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
           },
           logout: {
            endpoint: environment.baseUrl + 'auth/sign-out',
            method: 'post',
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
        },
      },
    }),
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
