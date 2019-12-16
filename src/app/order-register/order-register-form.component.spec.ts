import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegisterFormComponent } from './order-register-form.component';

describe('OrderRegisterFormComponent', () => {
  let component: OrderRegisterFormComponent;
  let fixture: ComponentFixture<OrderRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
