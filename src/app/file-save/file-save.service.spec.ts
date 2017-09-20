import { TestBed, inject } from '@angular/core/testing';

import { FileSaveService } from './file-save.service';

describe('FileSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSaveService]
    });
  });

  it('should be created', inject([FileSaveService], (service: FileSaveService) => {
    expect(service).toBeTruthy();
  }));
});
