import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, tap } from 'rxjs/operators'
import { Observable, pipe } from 'rxjs';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empDetails: any = [];
  empAddress: any=[];
  constructor(private api: ApiService) { }

  fetchEmployeeById(empid: string):Observable<Employee> {
   return this.api.fectchEmployeeById(empid);
  }

  getEmployeeAddress(empid: string){
    return this.api.getEmployeeAddress(empid)
    .pipe(tap(res => this.empAddress = res.Address));
  }

}
