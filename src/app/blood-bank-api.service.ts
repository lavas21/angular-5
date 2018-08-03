import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodDonar} from './blood-donar';
import { Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class BloodBankAPIService {
  baseUrl = "http://localhost:3000/donors";
  constructor(private http: HttpClient) {} 
    findAllDonors(): Observable<BloodDonar[]>{
      return this.http.get<BloodDonar[]>(this.baseUrl);
    }
  }
//}
