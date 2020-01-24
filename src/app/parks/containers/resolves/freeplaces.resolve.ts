import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetFreeplacesFromDB } from '../../store/parks.store';

@Injectable()
export class FreeplacesResolve implements Resolve<Freeplace[]> {
  constructor(private store: Store) {}

  resolve(): Observable<Freeplace[]> {
    return this.store.dispatch(new GetFreeplacesFromDB());
  }
}
