import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsDetailsComponent } from './terms-details.component';

describe('TermsDetailsComponent', () => {
  let component: TermsDetailsComponent;
  let fixture: ComponentFixture<TermsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
