import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscontainerComponent } from './newscontainer.component';

describe('NewscontainerComponent', () => {
  let component: NewscontainerComponent;
  let fixture: ComponentFixture<NewscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
