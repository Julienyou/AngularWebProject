import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvsComponent } from './components/cvs/cvs.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CvformComponent } from './components/cvform/cvform.component';
import { CvUpdateComponent } from './components/cv-update/cv-update.component';
import { CvsJobsComponent } from './components/cvs-jobs/cvs-jobs.component';
import { AddjobComponent } from './components/addjob/addjob.component';

/* Link a route to a component to know thanks to the url what we have
   to put in the router-outlet in the main html (app.component.html) */
const routes: Routes = [
  {path: '', redirectTo: 'cvs', pathMatch: 'full'},
  {path: 'cvs', component: CvsComponent },
  {path: 'jobs', component: JobsComponent},
  {path: 'addcv', component: CvformComponent},
  {path: 'updatecv/:id', component:CvUpdateComponent},
  {path: 'cvs/:id', component:CvsJobsComponent},
  {path: 'addjob', component: AddjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
