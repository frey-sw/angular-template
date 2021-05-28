import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from '@app-core';

import { HomeComponent } from './private-layout/home/home.component';
import { ProfileComponent } from './private-layout/profile/profile.component';
import { PRIVATE_MODULE_ROUTES } from './private.routes';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';

const routes: Routes = [
  {
    path: PRIVATE_MODULE_ROUTES.HOME,
    component: PrivateLayoutComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: PRIVATE_MODULE_ROUTES.HOME,
        component: HomeComponent,
      },
      {
        path: PRIVATE_MODULE_ROUTES.PROFILE,
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
