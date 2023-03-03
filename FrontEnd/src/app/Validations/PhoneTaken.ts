import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
@Injectable({
  providedIn: 'root',
})
export class PhoneTaken implements AsyncValidator {
  constructor(private user: UserService) {}
  validate = (
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.user.checkUserByPhone(control.value);
  };
}
