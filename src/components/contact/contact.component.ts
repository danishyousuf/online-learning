import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formValue: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formValue = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required, Validators.email],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onSubmit() {
    if (this.formValue.valid) {
      Swal.fire({
        title: 'Good Job!',
        text: 'Will Get Back To You Shortly',
        icon: 'success',
      });
      this.formValue.reset();
      this.router.navigate(['']);
    } else {
      Swal.fire({
        title: 'Opps!',
        text: 'Fill All Fields Correctly',
        icon: 'error',
      });
    }
  }
}
