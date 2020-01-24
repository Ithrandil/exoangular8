import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ParksModule } from '../parks/parks.module';
import { SearchBarModule } from '../shared/search-bar/search-bar.module';
import { MapComponent } from './components/map/map.component';
import { SearchPageComponent } from './containers/search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [SearchPageComponent, MapComponent],
  imports: [CommonModule, ParksModule, SearchPageRoutingModule, SearchBarModule],
  providers: [MapService]
})
export class SearchPageModule {}
