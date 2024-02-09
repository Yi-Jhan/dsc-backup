import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private router = inject(Router);
  private stateService = inject(StateService);

  constructor() { }

  logout(): void {

    this.stateService.setAuthData(null);
    this.stateService.sideMenuStatus.set(false);
    this.router.navigateByUrl('/Login');

  }
}
