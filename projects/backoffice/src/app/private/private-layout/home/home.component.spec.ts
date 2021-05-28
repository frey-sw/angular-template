import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestModule } from '@aft-core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [SharedTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  describe('Upon initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
