import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  readCurosal = false;
  readAbout = false;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  readMoreCurosal() {
    this.readCurosal = !this.readCurosal;
  }
  readMoreAbout() {
    this.readAbout = !this.readAbout;
  }
}
