import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APP_ROUTES, AuthService, MessagingService } from '@app-core';

@Component({
  selector: 'app-admin-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  form: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  resetToken = '';
  emailRegex = new RegExp(`^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$`);

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _messageService: MessagingService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.form = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.resetToken = this._route.snapshot.params.token;
    if (!this.resetToken) {
      this._router.navigate(APP_ROUTES.LANDING);
    }
  }

  get passCtrl() {
    return this.form.get('password');
  }

  get passConfirmCtrl() {
    return this.form.get('confirmPassword');
  }

  onBlur(controlName: string) {
    this.form.controls[controlName].markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      if (formValues.password !== formValues.confirmPassword) {
        this._messageService.error('RESET.TOAST.PASSWORD_ERROR.TITLE', 'RESET.TOAST.PASSWORD_ERROR.MESSAGE');
      } else {
        this._authService.resetPassword({
          ...formValues,
          token: this.resetToken,
        });
      }
    } else {
      this._messageService.error('RESET.TOAST.REQUIRED_ERROR.TITLE', 'RESET.TOAST.REQUIRED_ERROR.MESSAGE');
    }
  }
}
