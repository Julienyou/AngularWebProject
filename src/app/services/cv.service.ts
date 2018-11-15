import { Injectable } from '@angular/core';
import { CV } from 'src/app/class/cv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost/WebProject/public/index.php/api';
  
  getCvs(): Observable<CV> {
    return this.http.get<CV>(this.baseUrl + "/cvs");
  }
 /*  addCvs(): Observable<any> {
    return this.http.add
  } */

}
