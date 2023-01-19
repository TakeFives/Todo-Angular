import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MyFormValidators {

  static restrictedNames(control: FormControl): {[key: string]: boolean} | null {
    if(['poo', 'suck', 'waste'].includes(control.value)) {
      return {
        restrictedName: true
      }
    }
    return null
  }

  static matchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}