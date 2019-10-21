import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksDetailsComponent } from './parks-details.component';

describe('ParksDetailsComponent', () => {
  let component: ParksDetailsComponent;
  let fixture: ComponentFixture<ParksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
