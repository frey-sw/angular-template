import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APP_ROUTES, AuthService, MessagingService } from '@aft-core';

@Component({
  selector: 'aft-admin-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  form: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  resetToken = '';
  email = '';
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
    const formValues = this.form.value;
    if (this.form.valid) {
      if (formValues.password !== formValues.confirmPassword) {
        this._messageService.error('RESET.TOAST.PASSWORD_ERROR.TITLE', 'RESET.TOAST.PASSWORD_ERROR.MESSAGE');
      } else {
        this._authService.resetPassword({
          ...formValues,
          email: this.email,
          token: this.resetToken,
        });
      }
    } else {
      this._messageService.error('RESET.TOAST.REQUIRED_ERROR.TITLE', 'RESET.TOAST.REQUIRED_ERROR.MESSAGE');
    }
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.resetToken = params['token'];
      this.email = params['email'];
      const invalidEmail = !this.emailRegex.exec(this.email);
      if (invalidEmail) {
        this._router.navigate(APP_ROUTES.LANDING);
      }
    });
  }
}
