import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { ParksDetailsComponent } from './components/parks-details/parks-details.component';
import { ParksContainerComponent } from './containers/parks-container.component';
import { FreeplacesResolve } from './containers/resolves/freeplaces.resolve';
import { ParksResolve } from './containers/resolves/parks.resolve';
import { ParksRoutingModule } from './parks-routing.module';
import { ParksService } from './services/parks.service';
import { ParksState } from './store/parks.store';

@NgModule({
  declarations: [ParksContainerComponent, ParksDetailsComponent],
  imports: [CommonModule, HttpClientModule, ParksRoutingModule, NgxSmartModalModule.forChild(), NgxsModule.forFeature([ParksState])],
  providers: [ParksService, NgxSmartModalService, ParksResolve, FreeplacesResolve],
  exports: [ParksContainerComponent]
})
export class ParksModule {}
