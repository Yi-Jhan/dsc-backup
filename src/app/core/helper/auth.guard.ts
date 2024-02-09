import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { StateService } from '../../shared/service';

export const authGuard: CanMatchFn = (route, state) => {

  const router = inject(Router);
  const loginStatus = inject(StateService).loginStatus;

  return loginStatus() ? true : router.createUrlTree(['/Login']);

};
