import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankCustomerComponent } from './thank-customer.component';

describe('ThankCustomerComponent', () => {
  let component: ThankCustomerComponent;
  let fixture: ComponentFixture<ThankCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
