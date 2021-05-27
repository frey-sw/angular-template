import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestModule } from '@app-core';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';

describe('PublicComponentComponent', () => {
  let component: PublicLayoutComponent;
  let fixture: ComponentFixture<PublicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicLayoutComponent, PublicFooterComponent],
      imports: [SharedTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
