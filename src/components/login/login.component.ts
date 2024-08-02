import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formValue: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formValue = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.formValue.valid) {
      Swal.fire({
        title: 'Good Job!',
        text: 'Login Successful',
        icon: 'success',
      });
      this.formValue.reset();
      this.router.navigate(['']);
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Invalid Credentials',
        icon: 'error',
      });
    }
  }
}
