import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export const mailValidator: ValidatorFn = (control): ValidationErrors | null => {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '!', '#', '$', '%', '&', ' * ', ' +', ' + ',
    ' - ', ' / ', ' = ', ' ? ', ' ^ ', '_', '`', '{', '|', '}', '~', `'`];
  const domains = ['gmail.com', 'mail.ru', 'etc'];
  if (control.value) {
    if (!control.value.includes('@')) {
      return {invalidMail: true};
    }
    const userName = control.value.slice(0, control.value.indexOf('@'));
    if (!userName) {
      return {invalidMail: true};
    }
    for (const char of userName) {
      if (!chars.includes(char)) {
        return {invalidMail: true};
      }
    }
    const domain = control.value.slice(control.value.indexOf('@') + 1, control.value.length);
    if (!domains.includes(domain)) {
      return {invalidMail: true};
    }
  }
  return null;
};

@Directive({
  selector: '[appMailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MailValidatorDirective, multi: true}]
})
export class MailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return mailValidator(control);
  }

}
