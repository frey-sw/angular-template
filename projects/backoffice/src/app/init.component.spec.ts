import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService, SharedTestModule } from '@app-core';

import { InitComponent } from './init.component';
import { TranslateModule } from '@ngx-translate/core';

describe('InitComponent', () => {
  let component: InitComponent;
  let fixture: ComponentFixture<InitComponent>;
  let compiled: any;

  let authService: AuthService;
  let translateModule: TranslateModule;

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
    translateModule = TestBed.inject(TranslateModule);

    compiled = fixture.debugElement.nativeElement;
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      const authSpy = spyOn(authService, 'autoLogin');
      expect(component).toBeTruthy();
      component.ngOnInit();
      expect(authSpy).toHaveBeenCalled();
    });
  });
});
