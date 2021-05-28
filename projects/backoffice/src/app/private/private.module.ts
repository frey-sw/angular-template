import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './private-layout/home/home.component';
import { ProfileComponent } from './private-layout/profile/profile.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { PrivateHeaderComponent } from './private-layout/private-header/private-header.component';
import { PrivateFooterComponent } from './private-layout/private-footer/private-footer.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent, PrivateLayoutComponent, PrivateHeaderComponent, PrivateFooterComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
