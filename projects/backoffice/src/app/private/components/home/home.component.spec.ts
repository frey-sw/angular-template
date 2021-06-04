import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService, SharedTestModule } from '@app-core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authService: AuthService;
  let router: Router;

  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [SharedTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
