import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BloodDonar} from './blood-donar';
import { Observable } from 'rxjs';
import { BloodRequest } from './blood-request';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class BloodBankAPIService {
  baseUrl = "http://localhost:3000/donors";
  constructor(private http: HttpClient) {} 
    findAllDonors(): Observable<BloodDonar[]>{
      return this.http.get<BloodDonar[]>(this.baseUrl);
    }
    findAllDonors1(): Observable<BloodRequest[]>{
      return this.http.get<BloodRequest[]>(this.baseUrl);
    }
    addDonar(donar:BloodRequest):Observable<HttpResponse<{}>>{
      const headers = new HttpHeaders().set('content-type','application/json');
      console.log("addonar"+JSON.stringify(donar));
      return this.http.post<HttpResponse<{}>>(this.baseUrl,donar, {headers});
      //return [];
    }
    deleteDonar(donar:BloodRequest):Observable<BloodRequest>{
      //const headers = new HttpHeaders().set('content-type','application/json');
      console.log("delete"+JSON.stringify(donar));
      return this.http.delete<BloodRequest>(this.baseUrl+'/'+ donar.id);
      //return [];
    }
    editDonar(donar:BloodRequest):Observable<HttpResponse<{}>>{
      const headers = new HttpHeaders().set('content-type','application/json');
      console.log("edit"+JSON.stringify(donar));
      return this.http.put<HttpResponse<{}>>(this.baseUrl+'/'+donar.id, donar);
      //return [];
    }
  }
//}
