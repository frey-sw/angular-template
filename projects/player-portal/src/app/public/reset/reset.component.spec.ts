import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AuthService, IResetRequest, MessagingService, SharedTestModule } from '@aft-core';

import { ResetComponent } from './reset.component';
import { PublicModule } from '../public.module';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  let compiled: any;

  let authService: AuthService;
  let router: Router;
  let messagingService: MessagingService;

  let token = 'ResetToken';
  let email = 'email@email.com';
  let userPassword = 'Aa1*Aaaa';

  describe('Correct mail', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ResetComponent],
        imports: [SharedTestModule, PublicModule],
        providers: [
          MessagingService,
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({
                token,
                email,
              }),
            },
          },
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ResetComponent);
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
      it('When user presses change password with and invalid form, should display a toast', () => {
        const messagingSpy = spyOn(messagingService, 'error');

        const submitBtn = compiled.querySelector('button[name="submit"]');

        submitBtn.click();
        expect(messagingSpy).toHaveBeenCalledWith('RESET.TOAST.REQUIRED_ERROR.TITLE', 'RESET.TOAST.REQUIRED_ERROR.MESSAGE');
      });

      it('When passwords dont match, should display a toast', () => {
        const messagingSpy = spyOn(messagingService, 'error');

        const passwordInput = component.form.controls.password;
        const confirmPasswordInput = component.form.controls.confirmPassword;

        passwordInput.setValue('');
        confirmPasswordInput.setValue('');
        passwordInput.setValue('12345678*');
        confirmPasswordInput.setValue('12345678#');

        const submitBtn = compiled.querySelector('button[name="submit"]');
        submitBtn.click();
        expect(messagingSpy).toHaveBeenCalledWith('RESET.TOAST.PASSWORD_ERROR.TITLE', 'RESET.TOAST.PASSWORD_ERROR.MESSAGE');
      });

      it('When all fields are correct, onSubmit should call the auth service', () => {
        const authSpy = spyOn(authService, 'resetPassword');

        const userInput: IResetRequest = {
          password: userPassword,
          confirmPassword: userPassword,
          email,
          token,
        };

        // Improves coverage
        component.onBlur('password');
        component.onBlur('confirmPassword');

        const passwordInput = component.form.controls.password;
        const confirmPasswordInput = component.form.controls.confirmPassword;

        passwordInput.setValue('1234');
        confirmPasswordInput.setValue('1234');
        expect(passwordInput.errors).toBeTruthy();
        expect(confirmPasswordInput.errors).toBeTruthy();

        passwordInput.setValue(userInput.password);
        confirmPasswordInput.setValue(userInput.confirmPassword);

        const submitBtn = compiled.querySelector('button[name="submit"]');
        submitBtn.click();

        expect(authSpy).toHaveBeenCalledWith(userInput);
      });
    });
  });

  describe('Wrong mail', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ResetComponent],
        imports: [SharedTestModule, PublicModule],
        providers: [
          MessagingService,
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({
                token,
                email: 'wrong',
              }),
            },
          },
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ResetComponent);
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
  });
});
