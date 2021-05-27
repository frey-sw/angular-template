import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PrivateGuard, PublicGuard } from '@aft-core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [PublicGuard],
        loadChildren: () => import('./public/public.module').then(p => p.PublicModule),
      },
    ],
  },
  {
    path: 'private',
    children: [
      {
        path: '',
        canActivate: [PrivateGuard],
        loadChildren: () => import('./private/private.module').then(p => p.PrivateModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
