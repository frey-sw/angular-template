import { Injectable } from '@angular/core';
import { STORAGE_KEYS_ENUM } from '../enums/storage-keys.enum';

@Injectable()
export class TokenService {
  getToken(): string {
    return window.sessionStorage.getItem(STORAGE_KEYS_ENUM.AUTH_TOKEN) || '';
  }

  saveToken(token: string) {
    window.sessionStorage.setItem(STORAGE_KEYS_ENUM.AUTH_TOKEN, token);
  }

  deleteToken() {
    window.sessionStorage.removeItem(STORAGE_KEYS_ENUM.AUTH_TOKEN);
  }
}
