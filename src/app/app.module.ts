
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
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';

import { AuthGuard } from './auth-guard.service';

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
        NbDummyAuthStrategy.setup({
          name: 'email',
        }),
        // NbPasswordAuthStrategy.setup({
        //   name: 'email',

        //   baseEndpoint: '',
        //    login: {
        //      // ...
        //      endpoint: '/api/auth/login',
        //      method: 'post',
        //    },
        //    register: {
        //      // ...
        //      endpoint: '/api/auth/register',
        //      method: 'post',
        //    },
        //    logout: {
        //     endpoint: '/auth/sign-out',
        //     method: 'post',
        //   },
        // }),
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
