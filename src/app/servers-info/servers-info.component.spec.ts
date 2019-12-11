import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersInfoComponent } from './servers-info.component';

describe('ServersInfoComponent', () => {
  let component: ServersInfoComponent;
  let fixture: ComponentFixture<ServersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
