import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestModule } from '@app-core';

import { PublicFooterComponent } from './public-footer.component';

describe('PublicFooterComponent', () => {
  let component: PublicFooterComponent;
  let fixture: ComponentFixture<PublicFooterComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
