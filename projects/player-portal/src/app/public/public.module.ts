import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '@sw-ui-components';

import { PublicRoutingModule } from './public-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicFooterComponent } from './public-layout/public-footer/public-footer.component';

@NgModule({
  declarations: [LoginComponent, ResetComponent, ForgotComponent, PublicLayoutComponent, PublicFooterComponent],
  imports: [CommonModule, PublicRoutingModule, UiComponentsModule],
})
export class PublicModule {}
