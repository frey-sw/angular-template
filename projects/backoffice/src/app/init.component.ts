import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@app-core';

@Component({
  selector: 'app-back-root',
  template: '<router-outlet></router-outlet><sw-overlay-elements></sw-overlay-elements>',
})
export class InitComponent implements OnInit {
  title = 'backoffice';

  constructor(private _translate: TranslateService, private _authService: AuthService) {
    // lenguaje por defecto si la traducción no es encontrada
    _translate.setDefaultLang('en');

    // el lenguaje a usar, si no esta disponible, usara el por defecto
    _translate.use('es');
  }

  ngOnInit() {
    this._authService.autoLogin();
  }
}
