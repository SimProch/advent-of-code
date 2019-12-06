import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOneComponent } from './day-one.component';

describe('DayOneComponent', () => {
  let component: DayOneComponent;
  let fixture: ComponentFixture<DayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
