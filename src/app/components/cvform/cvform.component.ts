import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CvService } from 'src/app/services/cv.service';
import { Job } from 'src/app/class/job';
import { CV } from 'src/app/class/cv';

@Component({
  selector: 'app-cvform',
  templateUrl: './cvform.component.html',
  styleUrls: ['./cvform.component.css']
})
export class CvformComponent implements OnInit {
  jobs : Job[];
  cv : CV = new CV();

  constructor(private JobService:JobService, private CvService:CvService) {}

  ngOnInit() : void {
    this.getJobs()
  }
  getJobs() {
    this.JobService.getJobs()
        .subscribe(data => { this.jobs = data;})
  }
  onSubmit(){
    this.CvService.addCvs(this.cv)
        .subscribe()
  }
}
