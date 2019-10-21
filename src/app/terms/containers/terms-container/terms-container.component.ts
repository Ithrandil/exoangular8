import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import {
  AddTerms,
  EditOneTerms,
  GetOneTermsFromStateById,
  GetTermsFromDB,
  RemoveOneTerms,
} from 'src/app/store/actions/terms.actions';

import { TermsState } from '../../../store/state/moovhub.state';
import { Terms } from '../../models/terms.interface';
import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'app-terms-container',
  templateUrl: './terms-container.component.html',
  styleUrls: ['./terms-container.component.scss']
})
export class TermsContainerComponent implements OnInit, OnDestroy {
  @Select(TermsState.getTermsList) terms$: Observable<Terms[]>;

  private storeSub: Subscription = new Subscription();

  constructor(private store: Store, private termsService: TermsService) {}

  ngOnInit() {}

  getAllTermsFromDB(): void {
    this.store.dispatch(new GetTermsFromDB());
  }

  getTermById(id: string): void {
    this.storeSub.add(this.termsService.getTermById(id).subscribe());
  }

  getOneTermInStoreById(idParam: string) {
    this.store.dispatch(new GetOneTermsFromStateById(idParam)).subscribe(val => console.log(val));
  }

  updateTerms(newTerms: Terms): void {
    this.store.dispatch(new EditOneTerms(newTerms));
  }

  addTerms(): void {
    this.store.dispatch(
      new AddTerms({
        id: Math.random().toString(),
        text: 'Lorem Ipsum',
        title: 'CGV de plouf',
        version: '0.0',
        entityName: 'plouf',
        type: 'Oui',
        status: 'de pierre',
        shouldNotifyUser: false,
        creationDate: '06/06/1992',
        modificationDate: 'nope',
        publicationDate: 'never'
      })
    );
  }

  removeOneTermsById(id: string): void {
    this.store.dispatch(new RemoveOneTerms(id));
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
