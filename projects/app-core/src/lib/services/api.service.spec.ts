import { TestBed } from '@angular/core/testing';
import { ApiService, SharedTestModule } from '@app-core';
import { HttpTestingController } from '@angular/common/http/testing';

import { ApiTypeEnum } from '../enums/apiType.enum';
import { fakeEndpointUrls } from '../../test/mocks/app-config.service.mock';

describe('Api Service', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const fakeUrl = 'fakeUrl';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Upon user interaction', () => {
    it('When calling a GET request, it should call the Http client its the given params', () => {
      const response = { response: true };

      service.get(ApiTypeEnum.LOGIN, fakeUrl).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(fakeEndpointUrls.apiIdentityUrl + fakeUrl);

      expect(req.request.method).toBe('GET');
      req.flush(response);

      httpMock.verify();
    });

    it('When calling a POST request, it should call the Http client its the given params', () => {
      const body = { body: 'test' };
      const response = { response: true };

      service.post(ApiTypeEnum.LOGIN, fakeUrl, body).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(fakeEndpointUrls.apiIdentityUrl + fakeUrl);

      expect(req.request.method).toBe('POST');
      req.flush(response);

      httpMock.verify();
    });
    it('When calling a PUT request, it should call the Http client its the given params', () => {
      const body = { body: 'test' };
      const response = { response: true };

      service.put(ApiTypeEnum.LOGIN, fakeUrl, body).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(fakeEndpointUrls.apiIdentityUrl + fakeUrl);

      expect(req.request.method).toBe('PUT');
      req.flush(response);

      httpMock.verify();
    });

    it('When calling a POST request, it should call the Http client its the given params', () => {
      const body = { body: 'test' };
      const response = { response: true };

      service.post(ApiTypeEnum.LOGIN, fakeUrl, body).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(fakeEndpointUrls.apiIdentityUrl + fakeUrl);

      expect(req.request.method).toBe('POST');
      req.flush(response);

      httpMock.verify();
    });

    it('When calling a DELETE request, it should call the Http client its the given params', () => {
      const body = { body: 'test' };
      const response = { response: true };

      service.delete(ApiTypeEnum.LOGIN, fakeUrl).subscribe(res => {
        expect(res).toBe(response);
      });

      const req = httpMock.expectOne(fakeEndpointUrls.apiIdentityUrl + fakeUrl);

      expect(req.request.method).toBe('DELETE');
      req.flush(response);

      httpMock.verify();
    });
  });
});
