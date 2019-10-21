import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksContainerComponent } from './parks-container.component';

describe('ParksContainerComponent', () => {
  let component: ParksContainerComponent;
  let fixture: ComponentFixture<ParksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
