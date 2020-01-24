import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreeplacesResolve } from '../parks/containers/resolves/freeplaces.resolve';
import { ParksResolve } from '../parks/containers/resolves/parks.resolve';
import { SearchPageComponent } from './containers/search-page.component';

const ROUTES: Routes = [
  {
    path: 'search',
    resolve: {
      parks: ParksResolve,
      freePlaces: FreeplacesResolve
    },
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}
