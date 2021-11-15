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
  empid!: number;
  empDetails = {} as Employee;
  errorMessage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getEmpDetails(form: NgForm){
    console.log(form.value)
    let empid = form.value.empid;
    this.dataService.fetchEmployeeById(empid)
    .subscribe( res => {
      this.empDetails = res;
      this.errorMessage = '';
      console.log(this.empDetails)
    }, err =>{
      this.errorMessage = 'Employee Details NOT found!'
    })
  }

  getAddress(){

  }

}
