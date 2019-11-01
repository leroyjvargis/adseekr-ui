import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  NbCardModule,
  NbInputModule,
  NbButtonModule,
 } from '@nebular/theme';


import { SearchComponent } from './search.component';
import { KeywordComponent } from './keyword/keyword.component';
import { DomainComponent } from './domain/domain.component';

import { SearchRoutingModule } from './search-routing.module';
@NgModule({
  declarations: [
    SearchComponent,
    KeywordComponent,
    DomainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,

    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class SearchModule { }
