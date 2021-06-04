import { Component } from '@angular/core';
import { LANGUAGES_ENUM, STORAGE_KEYS_ENUM } from '@app-core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss'],
})
export class PublicFooterComponent {
  LANGUAGES_ENUM = LANGUAGES_ENUM;

  constructor(private _translateService: TranslateService) {}

  changeLanguage(lang: string) {
    window.localStorage.setItem(STORAGE_KEYS_ENUM.LANGUAGE, lang);
    this._translateService.use(lang);
  }
}
