import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService, SharedTestModule, STORAGE_KEYS_ENUM } from '@app-core';
import { TranslateService } from '@ngx-translate/core';

import { InitComponent } from './init.component';

describe('InitComponent', () => {
  let component: InitComponent;
  let fixture: ComponentFixture<InitComponent>;
  let compiled: any;

  let authService: AuthService;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitComponent],
      imports: [SharedTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    translateService = TestBed.inject(TranslateService);

    compiled = fixture.debugElement.nativeElement;
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      const authSpy = spyOn(authService, 'autoLogin');

      expect(component).toBeTruthy();

      component.ngOnInit();

      expect(authSpy).toHaveBeenCalledWith();
    });

    it('Should use navigator language', () => {
      window.localStorage.removeItem(STORAGE_KEYS_ENUM.LANGUAGE);
      // Rebuild the component
      fixture = TestBed.createComponent(InitComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      translateService = TestBed.inject(TranslateService);

      expect(translateService.currentLang).toBe(navigator.language);
    });
  });
});
