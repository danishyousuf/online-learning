import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readAbout = false;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  readMoreAbout() {
    this.readAbout = !this.readAbout;
  }
}
