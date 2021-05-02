import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('as') || !control.value.includes('.')) {
    return { invalidUrl: true };
  }
  return null;
}