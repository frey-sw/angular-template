import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

import { AuthService, LANGUAGES_ENUM, LoadingService, STORAGE_KEYS_ENUM } from '@app-core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-back-root',
  templateUrl: './init.component.html',
})
export class InitComponent implements OnInit, OnDestroy {
  title = 'backoffice';
  isAppLoading = false;

  private _subscriptions$: Subscription[] = [];

  constructor(
    private _translate: TranslateService,
    private _authService: AuthService,
    private _router: Router,
    private _loadingService: LoadingService
  ) {
    const lang = window.localStorage.getItem(STORAGE_KEYS_ENUM.LANGUAGE) || navigator.language;
    // lenguaje por defecto si la traducción no es encontrada
    _translate.setDefaultLang(LANGUAGES_ENUM.ES);

    // el lenguaje a usar, si no esta disponible, usara el por defecto
    _translate.use(lang);
  }

  ngOnInit() {
    this._loadingIndicatorInit();
    this._authService.autoLogin();
  }

  private _loadingIndicatorInit() {
    // Indicador de loading entre pantallas
    this._subscriptions$.push(
      this._router.events.subscribe((val: any) => {
        // Limpiar estado de navegación al NavigationEnd
        if (val instanceof NavigationEnd) {
          this.isAppLoading = false;
        }

        // Colocar estado "cargando" al RouteConfigLoadStart
        if (val instanceof RouteConfigLoadStart) {
          this.isAppLoading = true;
        }

        // Eliminar estado "cargando" al RouteConfigLoadEnd
        if (val instanceof RouteConfigLoadEnd) {
          this.isAppLoading = false;
        }
      })
    );

    // Indicador de loading de api requests
    this._subscriptions$.push(
      this._loadingService.loading$
        .pipe(delay(0)) // Esto previene un error de ExpressionChangedAfterItHasBeenCheckedError para los siguientes valores
        .subscribe((loading: boolean) => {
          this.isAppLoading = loading;
        })
    );
  }

  ngOnDestroy() {
    this._subscriptions$.forEach(sub => sub.unsubscribe());
  }
}