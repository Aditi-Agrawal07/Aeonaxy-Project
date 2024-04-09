import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  userEmail:string | null |undefined 

  // Icons
  faBasketball = faBasketball
  

  constructor(private userDetail: UserDataService){

    // console.log(this.userDetail.userEmail);
    
  }
  ngOnInit(): void {
// this.userEmail = this.userDetail.userEmail
    
    
  }


}
