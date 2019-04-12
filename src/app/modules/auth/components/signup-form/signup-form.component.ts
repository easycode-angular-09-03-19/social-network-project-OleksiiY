import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { passwordEqualForInput } from '@helpers/validators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Genders } from '../../interfaces/Genders';
import { ErrorStateMatcher } from '@angular/material';
import { MessageService } from 'primeng/api';
import { SignUpServerAnswer } from '../../interfaces/SignUpServerAnswer';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  public genders: Genders[] = [
    {value: 'male'},
    {value: 'female'},
    {value: 'other'}
  ];

  constructor(
    private authService: AuthService,
    private route: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      gender_orientation: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required, passwordEqualForInput]),
      dob: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Validation failed'});
      return console.log('Validate error');
    }
    const signUpInfo = Object.assign({}, this.signUpForm.value);
    signUpInfo['date_of_birth_day'] = signUpInfo.dob.getDay();
    signUpInfo['date_of_birth_month'] = signUpInfo.dob.getMonth();
    signUpInfo['date_of_birth_year'] = signUpInfo.dob.getFullYear();
    delete signUpInfo['repeatPassword'];
    delete signUpInfo['dob'];
    this.authService.signUp(signUpInfo).subscribe((res: SignUpServerAnswer) => {
      if (!res.error) {
        this.route.navigate(['/auth/login']);
      }
    }, err => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Server Error'});
      console.log(err);
    });
  }

}
