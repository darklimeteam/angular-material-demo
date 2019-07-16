import { TestBed } from '@angular/core/testing';

import { ThemePickService } from './theme-pick.service';

describe('ThemePickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemePickService = TestBed.get(ThemePickService);
    expect(service).toBeTruthy();
  });
});
