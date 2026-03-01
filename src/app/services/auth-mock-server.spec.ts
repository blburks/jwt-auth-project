import { TestBed } from '@angular/core/testing';
import { AuthMockServerService } from './auth-mock-server.service';

describe('AuthMockServer', () => {
  let service: AuthMockServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMockServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
