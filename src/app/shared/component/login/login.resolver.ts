import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { StateService } from '../../service';

export const loginResolver: ResolveFn<boolean> = (route, state) => {
  const isLogin = inject(StateService).loginStatus;
  if(isLogin()) {
    inject(Router).navigateByUrl('/SystemOverview');
    return true;
  }
  else {
    return false;
  }
};
