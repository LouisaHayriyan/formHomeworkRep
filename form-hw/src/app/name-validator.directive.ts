import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export const nameValidator: ValidatorFn = (control): ValidationErrors | null => {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
  if (control.value) {
    for (const char of control.value) {
      if (!chars.includes(char)) {
        return {invalidName: true};
      }
    }
    return null;
  }
};

@Directive({
  selector: '[appNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return nameValidator(control);
  }

}
