import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/class/cv';
import { CvService } from 'src/app/services/cv.service'
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cvs-jobs',
  templateUrl: './cvs-jobs.component.html',
  styleUrls: ['./cvs-jobs.component.css']
})
export class CvsJobsComponent implements OnInit {
  cvs: CV[];
  id;

  constructor(private CvService:CvService, private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.getCvsJobs();
  }
  getCvsJobs() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.CvService.getCvsJobs(this.id)
        .subscribe(data => { this.cvs = data;})
  }
  delete(id){
    this.CvService.deleteCv(id)
        .subscribe()
  }
}
