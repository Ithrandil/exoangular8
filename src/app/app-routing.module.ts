import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ParksContainerComponent } from './parks/containers/parks-container.component';
import { TermsContainerComponent } from './terms/containers/terms-container/terms-container.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parks', component: ParksContainerComponent },
  { path: 'terms', component: TermsContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
