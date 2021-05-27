import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { PrimengModule } from './primeng.module';

import { SwPageHeadComponent } from './components/page-head/sw-page-head.component';
import { SwButtonComponent } from './components/button/sw-button.component';
import { SwOverlayElementsComponent } from './components/overlay-elements/sw-overlay-elements.component';

@NgModule({
  declarations: [SwButtonComponent, SwPageHeadComponent, SwOverlayElementsComponent],
  imports: [CommonModule, ReactiveFormsModule, PrimengModule, TranslateModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    TranslateModule,
    SwButtonComponent,
    SwPageHeadComponent,
    SwOverlayElementsComponent,
  ],
  providers: [MessageService],
})
export class UiComponentsModule {}
