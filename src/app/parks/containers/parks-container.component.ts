import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetEnrichedParkings } from '../store/parks.store';

@Component({
  selector: 'app-parks-container',
  templateUrl: './parks-container.component.html',
  styleUrls: ['./parks-container.component.scss']
})
export class ParksContainerComponent implements OnInit {
  @Output()
  parkingGeolocation = new EventEmitter();

  @Select('ParksState.collectionEnrichedParkings') parkings$: Observable<any[]>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetEnrichedParkings());
  }

  goToParking(parkingPosition) {
    this.parkingGeolocation.emit(parkingPosition);
  }
}
