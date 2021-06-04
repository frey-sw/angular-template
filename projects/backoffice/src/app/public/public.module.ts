import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '@sw-ui-components';

import { PublicRoutingModule } from './public-routing.module';
import { ForgotComponent } from './components/public-layout/components/forgot/forgot.component';
import { LoginComponent } from './components/public-layout/components/login/login.component';
import { ResetComponent } from './components/public-layout/components/reset/reset.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { PublicFooterComponent } from './components/public-layout/components/public-footer/public-footer.component';

@NgModule({
  declarations: [LoginComponent, ResetComponent, ForgotComponent, PublicLayoutComponent, PublicFooterComponent],
  imports: [CommonModule, PublicRoutingModule, UiComponentsModule],
})
export class PublicModule {}
