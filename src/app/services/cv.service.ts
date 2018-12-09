import { Injectable } from '@angular/core';
import { CV } from 'src/app/class/cv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Job } from '../class/job';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost/WebProject/public/index.php/api';
  
  getCvs(): Observable<CV[]> {
    return this.http.get<CV[]>(this.baseUrl + "/cvs");
  }
  getCv(id:number) {
    return this.http.get<CV>(this.baseUrl + "/cv/" + id);
  }
  getCvsJobs(id:number) {
    return this.http.get<CV[]>(this.baseUrl + "/cvs/" + id);
  }
  deleteCv(id:number) {
    return this.http.delete<CV>(this.baseUrl + "/deletecv/" + id);
  }
  addCv(cv:CV) {
    return this.http.post<CV>(this.baseUrl + "/addcv", 
    {
      "motivation": cv.motivation,
      "skills": cv.skills,
      "studies":cv.studies,
      "id_job": cv.job,
      "lastname":cv.lastname,
      "firstname":cv.firstname,
      "birthday": cv.birthday,
      "email": cv.email,
      "city": cv.city,
      "country": cv.country,
      "phone_Number":cv.phone_number,
      "phoneNumber":cv.phone_number
      })
  }
  updateCv(cv:CV, id: string) {
    return this.http.put<CV>(this.baseUrl + "/updatecv/" +  id, 
    {
      "motivation": cv.motivation,
      "skills": cv.skills,
      "studies":cv.studies,
      "id_job": cv.job.id,
      "lastname":cv.lastname,
      "firstname":cv.firstname,
      "birthday": cv.birthday,
      "email": cv.email,
      "city": cv.city,
      "country": cv.country,
      "phone_Number":cv.phone_number,
      "phoneNumber":cv.phone_number
      })
  }
}
