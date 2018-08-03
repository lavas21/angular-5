import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodReqComponent } from './blood-req.component';

describe('BloodReqComponent', () => {
  let component: BloodReqComponent;
  let fixture: ComponentFixture<BloodReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
