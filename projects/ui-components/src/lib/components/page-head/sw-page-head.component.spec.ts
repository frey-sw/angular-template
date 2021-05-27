import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPageHeadComponent } from './sw-page-head.component';

describe('UiComponents Page Head', () => {
  let component: SwPageHeadComponent;
  let fixture: ComponentFixture<SwPageHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwPageHeadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
