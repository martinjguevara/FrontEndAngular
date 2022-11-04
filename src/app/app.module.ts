import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { BannerComponent } from './components/banner/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience/experience.component';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { EducationComponent } from './components/education/education/education.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
