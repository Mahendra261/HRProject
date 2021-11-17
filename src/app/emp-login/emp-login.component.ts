import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      fname : new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20)]),
      lname: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(20) ]),
      doj: new FormControl('', [Validators.required ]) ,
      mobile: new FormControl('', [Validators.required,Validators.pattern("^[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }



  onLogin(){
    console.log(this.loginForm.value);

  }

}
