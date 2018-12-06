import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CvService } from 'src/app/services/cv.service';
import { Job } from 'src/app/class/job';
import { CV } from 'src/app/class/cv';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.component.html',
  styleUrls: ['./cv-update.component.css']
})
export class CvUpdateComponent implements OnInit {
  jobs : Job[];
  cv : CV;
  id;

  constructor(private JobService:JobService, private CvService:CvService,
              private route:ActivatedRoute, private router:Router) { }

  ngOnInit() : void {
    this.getJobs()
    this.getCv()
  }
  getJobs() {
    this.JobService.getJobs()
        .subscribe(data => { this.jobs = data;})
  }
  getCv() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.CvService.getCv(this.id)
        .subscribe(data => { this.cv = data;})
  }
  onSubmit(){
    this.CvService.updateCv(this.cv, this.id)
        .subscribe()
    this.router.navigate(['/cvs']);
  }


}
