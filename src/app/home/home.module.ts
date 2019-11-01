import { NgModule } from '@angular/core';

import { NbMenuModule,
 } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    MiscellaneousModule,
    ThemeModule,

    NbMenuModule,
  ],
})
export class HomeModule { }
