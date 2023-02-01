import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { calculateAge, createDate } from './function';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

//validadores exercise one
const defaultLegalAge = 18;

export function legalAgeValidator(legalAge = defaultLegalAge): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let hasLegalAge = false;
    if (control.value) {
      hasLegalAge = calculateAge(createDate(control.value)) >= legalAge;
    }

    return hasLegalAge ? null : { nonLegalAge: { birthdate: control.value } };
  };
}

export function validDNIValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validDNI = false;
    if (control.value) {
      validDNI = createDate(control.value) > new Date();
    }
    return validDNI ? null : { nonValidDNI: { expirationDate: control.value } };
  };
}
