import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/class/cv';
import { CvService } from 'src/app/services/cv.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent implements OnInit {
  cvs: CV;

  constructor(private CvService: CvService, private router:Router) { }

  ngOnInit() : void {
    this.getCvs();
  }
  getCvs() {
    this.CvService.getCvs()
        .subscribe(data => { this.cvs = data;});
    this.router.navigate(['/cvs']);
  }
}
