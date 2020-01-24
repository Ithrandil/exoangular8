import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParksContainerComponent } from './containers/parks-container.component';
import { FreeplacesResolve } from './containers/resolves/freeplaces.resolve';
import { ParksResolve } from './containers/resolves/parks.resolve';

const ROUTES: Routes = [
  {
    path: 'parks',
    resolve: {
      parks: ParksResolve,
      freePlaces: FreeplacesResolve
    },
    component: ParksContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ParksRoutingModule {}
