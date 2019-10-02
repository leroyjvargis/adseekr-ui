import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    HomeRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
})
export class HomeModule { }
