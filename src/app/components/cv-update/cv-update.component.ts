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
  errorMessage : string;
  responseError : any;

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
    /* If the data send to the API are :
       valid : redirect the user to /cvs
       wrong : manipulate the response to display the name of the field
               and the error of this field in a flash message (errorMessage)*/
    this.CvService.updateCv(this.cv, this.id)
        .subscribe(data => {this.router.navigate(['/cvs']);},
        err => {
            this.responseError = err["error"];
            var key;
            this.errorMessage = "";
            if (Object.keys(this.responseError).indexOf("isTrusted") == -1) {         
              for(key in this.responseError) {
                  console.log(key);
                  this.errorMessage += key + " : " + this.responseError[key] + "<br>";
              }
            } else {
              this.errorMessage += "Veuillez remplir tous les champs"
            }
            
            this.router.navigate(['/updatecv', this.id]);
            },
        () => console.log(this.responseError));
  }
}
