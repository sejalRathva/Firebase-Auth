import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
import Swal from 'sweetalert2';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordDontMatch: true
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  showPassword = false;

  signUpForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
    confirmPassword: new UntypedFormControl('', Validators.required),
  }, {validators: passwordMatchValidator()});
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  submit() {
    if (!this.signUpForm.valid) {
      return;
    }
    const { name, email, password } = this.signUpForm.value;
    console.log(this.signUpForm.value);
    Swal.showLoading();
    this.authService
      .signUp(name, email, password)
      .pipe()
      .subscribe(() => {
        Swal.fire('Sign Up Successfully', '', 'success').then((result) => {
          Swal.close();
        });

        this.router.navigate(['./home/dashboard']);
      });
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
