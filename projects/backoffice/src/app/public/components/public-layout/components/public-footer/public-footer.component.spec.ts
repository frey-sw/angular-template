import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LANGUAGES_ENUM, SharedTestModule } from '@app-core';

import { PublicFooterComponent } from './public-footer.component';
import { TranslateService } from '@ngx-translate/core';

describe('PublicFooterComponent', () => {
  let component: PublicFooterComponent;
  let fixture: ComponentFixture<PublicFooterComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicFooterComponent],
      imports: [SharedTestModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translateService = TestBed.inject(TranslateService);
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Upon user interaction', () => {
    it('Should change language', () => {
      const spy = spyOn(translateService, 'use');

      component.changeLanguage(LANGUAGES_ENUM.ES);

      expect(spy).toHaveBeenCalledWith(LANGUAGES_ENUM.ES);
    });
  });
});
