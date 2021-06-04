import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestModule } from '@app-core';
import { Router } from '@angular/router';
import { generateFullPublicModuleRoute, PUBLIC_MODULE_ROUTES } from '../../../../public.routes';
import { ForgotComponent } from './forgot.component';

describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotComponent],
      imports: [SharedTestModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Upon user interaction', () => {
    it('Coverage improvements', () => {
      const routerSpy = spyOn(router, 'navigate');

      component.onBlur('');
      component.onBlur('email');

      component.onSubmit();
      component.form.controls.email.setValue('email@wmai.com');
      component.onSubmit();

      component.goToLogin();

      expect(routerSpy).toHaveBeenCalledWith(generateFullPublicModuleRoute(PUBLIC_MODULE_ROUTES.LOGIN));
    });
  });
});
