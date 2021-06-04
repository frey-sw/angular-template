import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/public-layout/components/login/login.component';
import { ForgotComponent } from './components/public-layout/components/forgot/forgot.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { PUBLIC_MODULE_ROUTES } from './public.routes';
import { ResetComponent } from './components/public-layout/components/reset/reset.component';

const routes: Routes = [
  {
    path: PUBLIC_MODULE_ROUTES.LOGIN,
    component: PublicLayoutComponent,
    children: [
      {
        path: PUBLIC_MODULE_ROUTES.LOGIN,
        component: LoginComponent,
      },
      {
        path: PUBLIC_MODULE_ROUTES.FORGOT_PASSWORD,
        component: ForgotComponent,
      },
      {
        path: PUBLIC_MODULE_ROUTES.RESET_PASSWORD,
        component: ResetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
