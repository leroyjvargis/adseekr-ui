import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
 } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    FormsModule,
    HomeRoutingModule,
    MiscellaneousModule,
    ThemeModule,

    NbMenuModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class HomeModule { }
