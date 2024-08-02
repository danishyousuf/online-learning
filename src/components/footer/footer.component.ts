import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  mail: string = '';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.isValidEmail(this.mail)) {
      Swal.fire({
        title: 'Good Job!',
        text: 'Will Get Back To You Shortly',
        icon: 'success',
      });
      this.mail = '';
      this.router.navigate(['']);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Please enter a valid email address',
        icon: 'error',
      });
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
