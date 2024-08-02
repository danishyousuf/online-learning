import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  termsVaraible = false;
  formValue: FormGroup;
  repeatPassword: string = '';
  passwordVisible: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formValue = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  termsAndCondition() {
    this.termsVaraible = !this.termsVaraible;
  }

  onSubmit() {
    if (!this.termsVaraible) {
      Swal.fire({
        title: 'Oops!',
        text: 'Accept the terms and conditions first',
        icon: 'error',
      });
      return;
    }
    if (this.formValue.invalid || this.repeatPassword === '') {
      Swal.fire({
        title: 'Oops!',
        text: 'Please fill in all required fields and ensure passwords match',
        icon: 'error',
      });
      return;
    }
    if (this.repeatPassword !== this.formValue.value.password) {
      Swal.fire({
        title: 'Oops!',
        text: 'Passwords do not match!',
        icon: 'error',
      });
      return;
    }
    Swal.fire({
      title: 'Good job!',
      text: 'User Registered Successfully',
      icon: 'success',
    });
    this.router.navigate(['']);
    this.formValue.reset();
  }
}
