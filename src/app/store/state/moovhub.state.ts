import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Terms } from 'src/app/terms/models/terms.interface';
import { TermsService } from 'src/app/terms/services/terms.service';

import { AddTerms, EditOneTerms, GetOneTermsFromStateById, GetTermsFromDB, RemoveOneTerms } from '../actions/terms.actions';

export class MoovhubStateModel {
  terms: Terms[];
}

@State<MoovhubStateModel>({
  name: 'MHState',
  defaults: {
    terms: []
  }
})
export class TermsState {
  constructor(private termsService: TermsService) {}

  /************
   * Selectors
   ***********/

  @Selector()
  static getTermsList(state: MoovhubStateModel): Terms[] {
    return state.terms;
  }

  // Dynamic selector creation THIS is viable with static parameter at the instantiation of the selector,
  // can't be used for dynamic fetch
  static getOneTermsById(id: string) {
    return createSelector(
      [TermsState],
      (state: MoovhubStateModel) => {
        return state.terms.filter(s => s.id === id);
      }
    );
  }

  /***********
   * Actions
   **********/

  @Action(GetTermsFromDB)
  getTermsFromDB({ setState }: StateContext<MoovhubStateModel>): Observable<Terms[]> {
    return this.termsService.getAllTerms().pipe(
      tap(result => {
        setState({
          terms: [...result]
        });
      })
    );
  }

  @Action(GetOneTermsFromStateById)
  getOneTermsFromStateById(ctx: StateContext<MoovhubStateModel>, { payload }: GetOneTermsFromStateById): Observable<Terms> {
    const state = ctx.getState();
    const oneterm = state.terms.find(el => {
      console.log(el);
      return el.id === payload;
    });
    return of(oneterm);
  }

  @Action(EditOneTerms)
  editOneTerms(ctx: StateContext<MoovhubStateModel>, { payload }: EditOneTerms): void {
    ctx.setState(
      patch({
        terms: updateItem<Terms>(terms => terms.id === payload.id, payload)
      })
    );
  }

  @Action(AddTerms)
  addOneTerms(ctx: StateContext<MoovhubStateModel>, { payload }: AddTerms): void {
    ctx.setState(
      patch({
        terms: append([payload])
      })
    );
  }

  @Action(RemoveOneTerms)
  removeOneTerms(ctx: StateContext<MoovhubStateModel>, { payload }: RemoveOneTerms): void {
    ctx.setState(
      patch({
        terms: removeItem<Terms>(terms => terms.id === payload)
      })
    );
  }
}
