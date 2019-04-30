import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { LoginServerAnswer } from '../../interfaces/LoginServerAnswer';
import { MessageService } from 'primeng/api';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuthService: GlobalAuthService,
    private messageService: MessageService,
    private currentUser: CurrentUserStoreService,
  ) {
  }

  ngOnInit() {
    if (this.globalAuthService.isLogin) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Validation failed' });
      return console.log('Validate error');
    }
    this.authService.login({ ...this.loginForm.value }).subscribe((res: LoginServerAnswer) => {
      if (!res.error) {
        this.currentUser.initCurrentUser();
        this.router.navigate(['/']);
      }
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server Error' });
      console.log(err);
    });

  }
}
