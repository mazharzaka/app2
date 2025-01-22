import { TestBed } from '@angular/core/testing';

import { AddproduectService } from './addproduect.service';

describe('AddproduectService', () => {
  let service: AddproduectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproduectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
