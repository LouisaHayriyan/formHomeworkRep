import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export const ageValidator: ValidatorFn = (control): ValidationErrors | null => {
  return control.value && (isNaN(+control.value) || +control.value < 0) ? {invalidAge: true} : null;
};

@Directive({
  selector: '[appAgeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return ageValidator(control);
  }

}
