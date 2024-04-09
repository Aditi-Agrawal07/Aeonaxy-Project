import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  userEmail:string | null |undefined 

  constructor(private userDetail: UserDataService){

    console.log(this.userDetail.userEmail);
    
  }
  ngOnInit(): void {
this.userEmail = this.userDetail.userEmail
    
    
  }


}
