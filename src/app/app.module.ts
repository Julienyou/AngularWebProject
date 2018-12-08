import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { CvsComponent } from './components/cvs/cvs.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CvformComponent } from './components/cvform/cvform.component';
import { CvUpdateComponent } from './components/cv-update/cv-update.component';
import { CvsJobsComponent } from './components/cvs-jobs/cvs-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CvsComponent,
    JobsComponent,
    CvformComponent,
    CvUpdateComponent,
    CvsJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
