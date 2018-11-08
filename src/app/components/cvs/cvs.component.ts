import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CV } from 'src/app/class/cv';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent implements OnInit {
  cv: Observable<CV[]>;
  private baseUrl = 'http://localhost/WebProject/public/index.php/api/cvs';

  constructor(private http: HttpClient) { }

  ngOnInit() : void {
    this.getFirstname();
  }
  getServiceFirstname():Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getFirstname() {
    this.getServiceFirstname().subscribe(
      data => {
        this.cv = data;
        console.log(this.cv);
      }
    );
  }

}
