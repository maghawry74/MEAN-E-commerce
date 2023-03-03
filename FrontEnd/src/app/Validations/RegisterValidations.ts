import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class RegisterValidation {
  static match(
    ControlElement: string,
    MatchingControlElement: string
  ): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      let control = form.get(ControlElement);
      let matchControl = form.get(MatchingControlElement);
      if (!control || !matchControl) {
        console.log('Not Founded');
      }
      let error =
        control?.value === matchControl?.value ? null : { noMatch: true };
      matchControl?.setErrors(error);
      return error;
    };
  }
}
