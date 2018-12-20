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
    /* Delete a cv and remove it from the array cvs */
    this.CvService.deleteCv(id)
        .subscribe()

    let i=0;
    for (i; i<this.cvs.length; i++) {
      if (this.cvs[i].id == id) {
        this.cvs.splice(i, 1);
      }
    }

    this.router.navigate(['/cvs', id]);
  }
}
