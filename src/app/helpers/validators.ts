import { AbstractControl } from '@angular/forms';

export function passwordEqualForInput(control: AbstractControl): { [key: string]: any } | null {
  const passValue = control.parent ? control.parent.value.password : null;
  return passValue !== control.value ? { notEqual: true } : null;
}
