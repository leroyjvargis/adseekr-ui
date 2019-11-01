import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';

import { KeywordComponent } from './keyword/keyword.component';
import { DomainComponent } from './domain/domain.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent,
  children: [
    {
      path: 'keyword',
      component: KeywordComponent,
    },
    {
      path: 'domain',
      component: DomainComponent,
    },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
    {
      path: '',
      redirectTo: 'keyword',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {
}
