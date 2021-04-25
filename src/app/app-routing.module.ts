import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: '',
    loadChildren: () =>
      import('@app/pages/dashboard/booking.module').then((m) => m.BookingModule),
  },

  // Auth
  {
    path: 'dashboard',
    children: [
      {
        path: 'abc',
        loadChildren: () =>
        import('@app/pages/dashboard/booking.module').then((m) => m.BookingModule),
      }
    ],
  },
  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
    import('@app/pages/dashboard/booking.module').then((m) => m.BookingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
