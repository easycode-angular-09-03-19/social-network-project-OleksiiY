import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export function passwordEqual(form: FormControl): { [key: string ]: any } | null {
  const areEqual = form.value.password === form.value.repeatPassword;
  return !areEqual ? { notEqual: true} : null;
}

export function passwordEqualForInput(control: AbstractControl): { [key: string]: any } | null {
  const passValue = control.parent ? control.parent.value.password : null;
  return passValue !== control.value ? { notEqual: true } : null;
}
