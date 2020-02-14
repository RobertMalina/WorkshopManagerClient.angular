/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersResolverService } from './orders-resolver.service';

describe('Service: OrdersResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersResolverService]
    });
  });

  it('should ...', inject([OrdersResolverService], (service: OrdersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
