import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service'
import { Job } from 'src/app/class/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];

  constructor(private JobService: JobService) { }

  ngOnInit() : void {
    this.getJobs()
  }
  getJobs() {
    this.JobService.getJobs()
        .subscribe(data => { this.jobs = data;})
  }
}
