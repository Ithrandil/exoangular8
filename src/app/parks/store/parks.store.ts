import { Action, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ParksService } from '../services/parks.service';

export class ParksStateModel {
  collection: Park[];
  collectionFreeplaces: Freeplace[]; //FIXME:
  collectionEnrichedParkings: []; //FIXME:
}

/***********************
 * Actions déclarations
 **********************/
export class GetParksFromDB {
  static readonly type = '[MH_PARKS] Get Parks From DB';
}

export class GetOneParksFromStateById {
  static readonly type = '[MH_PARKS] Get one Parks from state';
  constructor(public payload: string) { }
}

//FIXME:
export class GetFreeplacesFromDB {
  static readonly type = '[MH_FREEPLACES] Get Freeplaces From DB';
}
export class GetEnrichedParkings {
  static readonly type = '[MH_ENRICHEDPARKINGS] Get enriched parkings data';
}

@State<ParksStateModel>({
  name: 'ParksState',
  defaults: {
    collection: [],
    collectionFreeplaces: [],
    collectionEnrichedParkings: [] //FIXME:
  }
})
export class ParksState {
  constructor(private parksService: ParksService) { }

  /***********
   * Actions
   **********/

  @Action(GetParksFromDB)
  getParksFromDB(state: StateContext<ParksStateModel>): Observable<Park[]> {
    return this.parksService.getAllParks().pipe(
      tap(result => {
        console.log('parksfromDB', result);
        state.setState(patch({ collection: [...result] }));
      })
    );
  }

  @Action(GetOneParksFromStateById)
  getOneParksFromStateById(ctx: StateContext<ParksStateModel>, { payload }: GetOneParksFromStateById): Observable<Park> {
    const state = ctx.getState();
    const oneParks = state.collection.find(el => {
      return el.id_park === payload;
    });
    return of(oneParks);
  }

  //FIXME:
  @Action(GetFreeplacesFromDB)
  getFreeplacesFromDB(state: StateContext<ParksStateModel>): Observable<Freeplace[]> {
    return this.parksService.getFreePlaces().pipe(
      tap(result => {
        console.log('FREEPLACES FROM DB', result);

        state.setState(patch({ collectionFreeplaces: [...result] }));
      })
    );
  }

  @Action(GetEnrichedParkings)
  getEnrichedParkings(ctx: StateContext<ParksStateModel>) {
    const state = ctx.getState();
    const enrichedPark = [];
    state.collection.forEach(park => {
      enrichedPark.push({
        ...park,
        ...state.collectionFreeplaces.find((freePlace: any) => {
          return park.id_park === freePlace.id_park;
        })
      });
    });
    ctx.setState(patch({ collectionEnrichedParkings: [...enrichedPark] }));
  }
}
