import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Terms } from '../../models/terms.interface';

@Component({
  selector: 'app-terms-details',
  templateUrl: './terms-details.component.html',
  styleUrls: ['./terms-details.component.scss']
})
export class TermsDetailsComponent implements OnInit {
  @Input()
  details: Terms;

  @Output()
  newTerms = new EventEmitter<Terms>();

  @Output()
  idTermsToRemove = new EventEmitter<string>();

  displayedText = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  showText(): void {
    this.displayedText = !this.displayedText;
  }

  showToast(): void {
    this.toastr.success('Praise the kraken');
  }

  changeTitleTerm(titleParam: string): void {
    this.details = { ...this.details, title: titleParam };
    this.newTerms.emit(this.details);
  }

  removeThisTerms(): void {
    this.idTermsToRemove.emit(this.details.id);
  }
}
