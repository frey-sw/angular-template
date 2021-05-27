import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, MessagingService } from '@app-core';
import { generateFullPublicModuleRoute, PUBLIC_MODULE_ROUTES } from '../public.routes';

@Component({
  selector: 'app-back-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  showPassword = false;
  showResetPasswordMessage = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _messagingService: MessagingService
  ) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(`^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$`)]],
      password: ['', Validators.required],
    });

    this._authService.hasChangedPassword.subscribe(show => {
      this.showResetPasswordMessage = show;
    });
  }

  get emailCtrl() {
    return this.form.get('email');
  }

  get passCtrl() {
    return this.form.get('password');
  }

  onBlur() {
    this.form.controls.email.markAsDirty();
    this.form.controls.password.markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      this._authService.loginBackoffice(this.form.value);
    } else if (this.form.pristine) {
      this._messagingService.error('LOGIN.TOAST.EMPTY.TITLE', 'LOGIN.TOAST.EMPTY.MESSAGE');
    } else {
      this._messagingService.info('LOGIN.TOAST.INFO.TITLE', 'LOGIN.TOAST.INFO.MESSAGE');
    }
  }

  goToForgot() {
    this._router.navigate(generateFullPublicModuleRoute(PUBLIC_MODULE_ROUTES.FORGOT_PASSWORD));
  }
}
