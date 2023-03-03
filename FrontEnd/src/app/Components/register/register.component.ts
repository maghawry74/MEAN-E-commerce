import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { RegisterValidation } from '../../Validations/RegisterValidations';
import { EmailTaken } from 'src/app/Validations/EmailTaken';
import { PhoneTaken } from 'src/app/Validations/PhoneTaken';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private user: UserService,
    private CheckingEmail: EmailTaken,
    private CheckingPhone: PhoneTaken
  ) {}
  FirstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(12),
  ]);
  LastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(12),
  ]);
  Email = new FormControl(
    '',
    [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      ),
    ],
    [this.CheckingEmail.validate]
  );
  Password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?"])[a-zA-Z0-9!#$%&?]/
    ),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  Phone = new FormControl(
    '',
    [Validators.required, Validators.pattern(/01[0125]\d{8}/)],
    [this.CheckingPhone.validate]
  );

  governorate = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  registerForm = new FormGroup(
    {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Phone: this.Phone,
      Password: this.Password,
      confirmPassword: this.confirmPassword,
      governorate: this.governorate,
      city: this.city,
    },
    [RegisterValidation.match('Password', 'confirmPassword')]
  );

  register(result: any) {
    let user: Iuser = {
      FirstName: this.FirstName.value!,
      LastName: this.LastName.value!,
      Email: this.Email.value!,
      Password: this.Password.value!,
      Phone: this.Phone.value!,
      Address: {
        governorate: this.governorate.value!,
        City: this.city.value!,
      },
    };
    this.user.RegisterUser(user).subscribe({
      next: (data) => {
        result.textContent = 'Registeration Has Successed';
        result.classList.add('text-green-600');
      },
      error: (err) => {
        result.textContent = 'An Error Occured. Try Again Later';
        result.classList.add('text-red-600');
        console.log(err);
      },
    });
  }
}
