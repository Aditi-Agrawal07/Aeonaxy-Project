import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserService } from './register-user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  faTriangleExclamation = faTriangleExclamation

  error:boolean = false
  success: boolean = false;
  

  constructor(private regsiterUSerService:RegisterUserService,private router : Router, private usedetailService: UserDataService){}

  register = new FormGroup({
    name:  new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    termsandCondition: new FormControl('')
  })
  onSubmit(){
console.log(this.register.value);

    this.regsiterUSerService.registerUSer(this.register.value).subscribe((response)=>{
      
      
      this.usedetailService.userEmail = this.register.value.email
      this.usedetailService.username = this.register.value.username
      this.router.navigate(['profile'])
      
    },(error)=>{
   
  this.error = true
    })
  
    

  }
  



}
