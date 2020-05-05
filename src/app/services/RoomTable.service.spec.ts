import { TestBed } from '@angular/core/testing';

import { RoomTableService } from './RoomTable.service';

describe('GameServiceService', () => {
  let service: RoomTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
