import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachModalComponent } from './coach-modal.component';

describe('CoachModalComponent', () => {
  let component: CoachModalComponent;
  let fixture: ComponentFixture<CoachModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
