// import { Action, State, StateContext } from '@ngxs/store';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';

// import { ParksService } from '../services/parks.service';

// export class FreeplacesStateModel {
//   collection: Freeplace[];
// }
// /***********************
//  * Actions declarations
//  **********************/
// export class GetFreeplacesFromDB {
//   static readonly type = '[MH_FREEPLACES] Get Freeplaces From DB';
// }

// export class GetOneFreeplacesFromStateById {
//   static readonly type = '[MH_FREEPLACES] Get one Freeplaces from state';
//   constructor(public payload: string) {}
// }

// @State<FreeplacesStateModel>({
//   name: 'FreeplacesState',
//   defaults: {
//     collection: []
//   }
// })
// export class FreeplacesState {
//   constructor(private parksService: ParksService) {}

//   /***********
//    * Actions
//    **********/

//   @Action(GetFreeplacesFromDB)
//   getFreeplacesFromDB({ setState }: StateContext<FreeplacesStateModel>): Observable<Freeplace[]> {
//     return this.parksService.getFreePlaces().pipe(
//       tap(result => {
//         setState({ collection: [...result] });
//       })
//     );
//   }

//   @Action(GetOneFreeplacesFromStateById)
//   getOneFreeplacesFromStateById(
//     ctx: StateContext<FreeplacesStateModel>,
//     { payload }: GetOneFreeplacesFromStateById
//   ): Observable<Freeplace> {
//     const state = ctx.getState();
//     const oneFreeplaces = state.collection.find(el => {
//       return el.id_park === payload;
//     });
//     return of(oneFreeplaces);
//   }
// }
