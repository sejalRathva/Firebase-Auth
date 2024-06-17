import { Component,OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   
  showPassword = false;

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
  });
  constructor(private router: Router, 
    private authService: AuthenticationService, ) {}
  submit() {

    if(!this.loginForm.valid){
      return;
    }
    const {email,password} = this.loginForm.value;
    Swal.showLoading();
    this.authService.login(email, password).pipe(
    ).subscribe (()=>{
      Swal.fire('Login Successfully', '', 'success').then((result) => {
        Swal.close();
      })

      this.router.navigate(['./home/dashboard'])
    })
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
