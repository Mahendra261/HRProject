import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators'
import { Observable, pipe } from 'rxjs';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  title = 'Empoloyee Details';
  empid!: string;

  empDetails = {} as Employee;
  empAddress: any= [];

  errorMessage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getEmpDetails(form: NgForm){
    console.log(form.value)
    this.empid = form.value.empid;
    this.dataService.fetchEmployeeById(this.empid)
    .subscribe( res => {
      this.empDetails = res;
      this.errorMessage = '';
      this.empAddress =[];
      console.log(this.empDetails)
    }, err =>{
      this.errorMessage = 'Employee Details NOT found!'
    })
  }

  getAddress(){

    this.dataService.getEmployeeAddress(this.empid)
    .subscribe( res => {
      this.empAddress.push(res.Address);
      this.errorMessage = '';
      this.empAddress = this.empAddress[0];
      console.log(this.empAddress[0]);
    }, err =>{
      this.errorMessage = 'Employee Details NOT found!'
    })
  }

}
