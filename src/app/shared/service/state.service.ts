import { Injectable, computed, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Theme } from '../../core/enum';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _authData   = signal(this.getDefaultAuthData());
  loginStatus         = computed(() => this._authData() ? true : false);
  language            = signal(localStorage.getItem('lang') ?? 'en-us');
  menuAction          = signal(false);
  viewPrivilege       = signal<any>(null);
  sideMenuStatus      = signal(this.loginStatus());
  currentService      = signal(environment.service);
  idleTimeSec         = signal(43200);
  theme               = signal<Theme>(this.getDefaultTheme());

  constructor() { }

  private getDefaultAuthData() {
    const authData = localStorage.getItem('authData');
    if (authData) {
      try {
        return JSON.parse(authData);
      }
      catch (error) {
        return null;
      }
    }

    return null;
  }

  getDefaultTheme() {
    const theme = localStorage.getItem('theme');

    switch(theme) {
      case Theme.Light:
      case Theme.Dark:
        return theme;

      default:
        return Theme.Light
    }
  }

  setAuthData(info: any): void {
    if (info) {
      localStorage.setItem('authData', JSON.stringify(info));
      this._authData.set(info);
    }
    else {
      localStorage.removeItem('authData');
      this._authData.set(null);
    }
  }

  getAuthData() {
    return this._authData;
  }
}
