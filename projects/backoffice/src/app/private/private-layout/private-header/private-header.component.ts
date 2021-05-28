import { Component } from '@angular/core';
import { generateFullPrivateModuleRoute, PRIVATE_MODULE_ROUTES } from '../../private.routes';
import { Router } from '@angular/router';
import { AuthService } from '@aft-core';

@Component({
  selector: 'aft-scout-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent {
  constructor(private _router: Router, private _authService: AuthService) {}

  onLogout() {
    this._authService.logout();
  }

  goToProfile() {
    this._router.navigate(generateFullPrivateModuleRoute(PRIVATE_MODULE_ROUTES.PROFILE));
  }
}
