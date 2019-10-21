import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ParksDetailsComponent } from './components/parks-details/parks-details.component';
import { ParksContainerComponent } from './containers/parks-container.component';
import { ParksService } from './services/parks-service.service';

@NgModule({
  declarations: [ParksContainerComponent, ParksDetailsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ParksService],
  exports: [ParksContainerComponent]
})
export class ParksModule {}
