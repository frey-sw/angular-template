import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHeaderComponent } from './private-header.component';
import { AuthService, SharedTestModule } from '@aft-core';
import { Router } from '@angular/router';

describe('PrivateHeaderComponent', () => {
  let component: PrivateHeaderComponent;
  let fixture: ComponentFixture<PrivateHeaderComponent>;
  let authService: AuthService;
  let router: Router;

  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateHeaderComponent],
      imports: [SharedTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    compiled = fixture.debugElement.nativeElement;
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Upon user interaction', () => {
    it('When user presses the profile button, it should redirect', () => {
      const routeSpy = spyOn(router, 'navigate');
      component.goToProfile();

      expect(routeSpy).toHaveBeenCalledWith(['private', 'profile']);
    });

    it('When user presses the logout button, it should logut', () => {
      const authSpy = spyOn(authService, 'logout');
      component.onLogout();

      expect(authSpy).toHaveBeenCalled();
    });
  });
});
