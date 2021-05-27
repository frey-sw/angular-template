import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService, ILoginRequest, MessagingService, SharedTestModule } from '@aft-core';

import { LoginComponent } from './login.component';

import { generateFullPublicModuleRoute, PUBLIC_MODULE_ROUTES } from '../public.routes';
import { PublicModule } from '../public.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: any;

  let authService: AuthService;
  let router: Router;
  let messagingService: MessagingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedTestModule, PublicModule],
      providers: [MessagingService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    messagingService = TestBed.inject(MessagingService);

    compiled = fixture.debugElement.nativeElement;
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Upon user interaction', () => {
    it('When user presses the forgot button, it should redirect', () => {
      const routeSpy = spyOn(router, 'navigate');

      const forgotBtn = compiled.querySelector('button[name="goToForgot"]');
      forgotBtn.click();

      expect(routeSpy).toHaveBeenCalledWith(generateFullPublicModuleRoute(PUBLIC_MODULE_ROUTES.FORGOT_PASSWORD));
    });

    it('When user immediately presses login, a message should be shown', () => {
      const messagingSpy = spyOn(messagingService, 'error');

      const submitBtn = compiled.querySelector('button[name="submit"]');
      submitBtn.click();

      expect(messagingSpy).toHaveBeenCalledWith('LOGIN.TOAST.EMPTY.TITLE', 'LOGIN.TOAST.EMPTY.MESSAGE');
    });

    it('When one field has error, should show toast ', () => {
      const messagingSpy = spyOn(messagingService, 'info');

      const userInput: ILoginRequest = {
        email: 'fake@email.com.',
        password: '12345678',
      };

      const emailInput = component.form.controls.email;
      const passInput = component.form.controls.password;

      emailInput.setValue('');
      passInput.setValue('');
      emailInput.markAsDirty();
      passInput.markAsDirty();

      emailInput.setValue(userInput.email);

      const submitBtn = compiled.querySelector('button[name="submit"]');
      submitBtn.click();

      expect(messagingSpy).toHaveBeenCalledWith('LOGIN.TOAST.INFO.TITLE', 'LOGIN.TOAST.INFO.MESSAGE');
    });

    it('On entering all fields correctly, and login, it should call the auth service', () => {
      const authSpy = spyOn(authService, 'loginScouting');

      const userInput: ILoginRequest = {
        email: 'fake@email.com',
        password: '123456',
      };

      // Improves coverage
      component.onBlur();

      const emailInput = component.form.controls.email;
      emailInput.setValue('wrong email');

      expect(emailInput.errors).toBeTruthy();
      emailInput.setValue(userInput.email);

      const passInput = component.form.controls.password;
      passInput.setValue(userInput.password);

      const submitBtn = compiled.querySelector('button[name="submit"]');
      submitBtn.click();

      expect(authSpy).toHaveBeenCalledWith(userInput);
    });
  });
});
