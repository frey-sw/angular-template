import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
