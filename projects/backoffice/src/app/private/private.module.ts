import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
