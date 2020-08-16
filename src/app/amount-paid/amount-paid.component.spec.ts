import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountPaidComponent } from './amount-paid.component';

describe('AmountPaidComponent', () => {
  let component: AmountPaidComponent;
  let fixture: ComponentFixture<AmountPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
