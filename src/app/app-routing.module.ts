import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MyDataComponent } from './my-data/my-data.component';
import { TermsContainerComponent } from './terms/containers/terms-container/terms-container.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terms', component: TermsContainerComponent },
  { path: 'mydata', component: MyDataComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
