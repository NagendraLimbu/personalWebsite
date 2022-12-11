import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { FooterComponent } from './profile/footer/footer.component';
import { IntroComponent } from './profile/intro/intro.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExperienceComponent } from './profile/experience/experience.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
