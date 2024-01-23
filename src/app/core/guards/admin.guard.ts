import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthAdminService } from './../services/auth-admin.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authAdminService = inject(AuthAdminService);
  const router = inject(Router);

  if (authAdminService.isAdmin()) {
    return true;
  } else {
    const urlTreeReturn = router.createUrlTree(['/login']);
    return urlTreeReturn;
  }
};
