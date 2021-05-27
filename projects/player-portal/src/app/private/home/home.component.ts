import { AuthService } from '@aft-core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generateFullPrivateModuleRoute, PRIVATE_MODULE_ROUTES } from '../private.routes';

@Component({
  selector: 'aft-player-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _router: Router, private _authService: AuthService) {}

  goToProfile() {
    this._router.navigate(generateFullPrivateModuleRoute(PRIVATE_MODULE_ROUTES.PROFILE));
  }

  onLogout() {
    this._authService.logout();
  }
}
