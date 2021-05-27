import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@aft-core';
import { generateFullPublicModuleRoute, PUBLIC_MODULE_ROUTES } from '../public.routes';

@Component({
  selector: 'aft-player-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent {
  form: FormGroup;
  showPassword = false;

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(`^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$`)]],
    });
  }

  get emailCtrl() {
    return this.form.controls.email;
  }

  onBlur(controlName: string) {
    this.form.get(controlName)?.markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      this._authService.sendForgotEmail({ email: formValues.email, clientUri: `${window.location.origin}/reset/` });
    }
  }

  goToLogin() {
    this._router.navigate(generateFullPublicModuleRoute(PUBLIC_MODULE_ROUTES.LOGIN));
  }
}
