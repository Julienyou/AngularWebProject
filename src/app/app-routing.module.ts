import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvsComponent } from './components/cvs/cvs.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CvformComponent } from './components/cvform/cvform.component';
import { CvUpdateComponent } from './components/cv-update/cv-update.component';

const routes: Routes = [
  {path: '', redirectTo: 'cvs', pathMatch: 'full'},
  {path: 'cvs', component: CvsComponent },
  {path: 'jobs', component: JobsComponent},
  {path: 'addcv', component: CvformComponent},
  {path: 'updatecv/:id', component:CvUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
