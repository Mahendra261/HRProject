import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = 'http://localhost:8000';
  constructor(private http: HttpClient) { }


  fectchEmployeeById(empid: string){
    return this.http.get<Employee>(this.API+`/empdetails/${empid}`);
  }

  getEmployeeAddress(empid: string){
    return this.http.get<Employee>(this.API + `/empaddress/${empid}`);
  }
}
