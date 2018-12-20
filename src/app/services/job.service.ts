import { Injectable } from '@angular/core';
import { Job } from 'src/app/class/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost/WebProject/public/index.php/api';
  
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + "/jobs");
  }
  addJob(job) {
    /* Send a POST request to the API for adding a particular job thanks to the formed json */
    return this.http.post<any>(this.baseUrl + "/addjob",
    {"job": job});
  }
}
