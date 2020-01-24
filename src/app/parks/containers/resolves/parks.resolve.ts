import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetParksFromDB } from '../../store/parks.store';

@Injectable()
export class ParksResolve implements Resolve<Park[]> {
  constructor(private store: Store) {}

  resolve(): Observable<Park[]> {
    return this.store.dispatch(new GetParksFromDB());
  }
}
