import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineCourseRoutingModule } from './online-course-routing.module';
import { HomepageComponent } from 'src/components/homepage/homepage.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { CoursesComponent } from 'src/components/courses/courses.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomepageComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    OnlineCourseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class OnlineCourseModule {}
