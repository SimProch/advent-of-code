import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTwoComponent } from './day-two.component';

describe('DayTwoComponent', () => {
  let component: DayTwoComponent;
  let fixture: ComponentFixture<DayTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
