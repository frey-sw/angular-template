import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  getToken(): string {
    return window.sessionStorage.getItem('authToken') || '';
  }

  saveToken(token: string) {
    window.sessionStorage.setItem('authToken', token);
  }

  deleteToken() {
    window.sessionStorage.removeItem('authToken');
  }
}
