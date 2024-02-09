import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../..';
import { StateService } from '../../service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sideMenuStatus = this.stateService.sideMenuStatus;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private router: Router
  ) {}

  onSubmit(): void {
    if(!this.loginForm.valid) { return; }

    this.stateService.setAuthData({token: 'ABC'});
    this.sideMenuStatus.set(true);
    this.router.navigateByUrl('/');
  }
}
