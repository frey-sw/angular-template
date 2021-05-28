import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';
import { ApiTypeEnum } from '../enums/apiType.enum';
import { TokenService } from './token.service';
import { MessagingService } from './messaging.service';
import { IForgotRequest, ILoginRequest, ILoginResponse, IResetRequest, IResetResponse } from '../interfaces';
import { APP_ROUTES } from '../app.routes';

@Injectable()
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  hasChangedPassword = new BehaviorSubject<boolean>(false);

  constructor(
    private _router: Router,
    private _apiService: ApiService,
    private _messagingService: MessagingService,
    private _tokenService: TokenService
  ) {}

  loginBackoffice(loginRequest: ILoginRequest) {
    this._apiService.post(ApiTypeEnum.LOGIN, 'sessions/backoffice', loginRequest).subscribe(
      (response: ILoginResponse) => this._handleLoginResponse(response),
      error => this._handleLoginError()
    );
  }

  autoLogin(): void {
    const hasToken = !!this._tokenService.getToken();
    if (hasToken) {
      this.isLoggedIn.next(true);
      this._router.navigate(APP_ROUTES.HOME);
    }
  }

  logout(): void {
    this._tokenService.deleteToken();
    this.isLoggedIn.next(false);
    this._router.navigate(APP_ROUTES.LANDING);
  }

  sendForgotEmail(forgotRequest: IForgotRequest) {
    this._apiService.post(ApiTypeEnum.FORGOT, 'users/ForgotPassword', forgotRequest).subscribe();
    this._messagingService.success('FORGOT.TOAST.SUCCESS.TITLE', 'FORGOT.TOAST.SUCCESS.MESSAGE');
    this._router.navigate(APP_ROUTES.LANDING);
  }

  resetPassword(resetRequest: IResetRequest) {
    this._apiService.post(ApiTypeEnum.RESET, 'users/ResetPassword', resetRequest).subscribe(
      (response: IResetResponse) => {
        this._messagingService.success('RESET.TOAST.SUCCESS.TITLE', 'RESET.TOAST.SUCCESS.MESSAGE');
        this.hasChangedPassword.next(true);
      },
      error => {
        this._messagingService.error('RESET.TOAST.ERROR.TITLE', 'RESET.TOAST.ERROR.MESSAGE');
      }
    );
    this._router.navigate(APP_ROUTES.LANDING);
  }

  private _handleLoginResponse(response: ILoginResponse): void {
    {
      this.isLoggedIn.next(true);
      this._tokenService.saveToken(response.element.accessToken);
      this._router.navigate(APP_ROUTES.HOME);
    }
  }

  private _handleLoginError(): void {
    this._messagingService.error('LOGIN.TOAST.ERROR.TITLE', 'LOGIN.TOAST.ERROR.MESSAGE');
    this._router.navigate(APP_ROUTES.LANDING);
  }
}
