import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PRIVATE_MODULE_ROUTES } from './private.routes';

const routes: Routes = [
  {
    path: PRIVATE_MODULE_ROUTES.HOME,
    component: HomeComponent,
  },
  {
    path: PRIVATE_MODULE_ROUTES.PROFILE,
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
