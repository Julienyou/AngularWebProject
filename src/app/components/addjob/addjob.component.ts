import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  job : string;

  constructor(private JobService:JobService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.JobService.addJob(this.job)
        .subscribe()
    this.router.navigate(['/cvs']);
  }
}
