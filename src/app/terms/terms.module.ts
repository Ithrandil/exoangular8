import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TermsDetailsComponent } from './components/terms-details/terms-details.component';
import { TermsContainerComponent } from './containers/terms-container/terms-container.component';
import { TermsService } from './services/terms.service';

@NgModule({
  declarations: [TermsContainerComponent, TermsDetailsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [TermsService],
  exports: [TermsContainerComponent]
})
export class TermsModule {}
