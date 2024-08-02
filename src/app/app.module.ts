import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineCourseModule } from 'src/modules/online-course/online-course.module';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, OnlineCourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
