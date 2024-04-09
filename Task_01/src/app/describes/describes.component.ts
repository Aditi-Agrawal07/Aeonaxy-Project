import { NgClass } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-describes',
  standalone: true,
  imports: [NgClass],
  templateUrl: './describes.component.html',
  styleUrl: './describes.component.css'
})
export class DescribesComponent {

  selectedCard: number | null = null;
  onselected:boolean = false
cardDescription:string="";
userEmail:string | null | undefined = this.userdetails.userEmail
userData:{} = {}
  constructor(private router: Router, private userdetails:UserDataService){}

  
  
  onclicked(cardNumber: number){
    console.log(cardNumber);
    
    this.selectedCard = cardNumber
    this.onselected = true
    if(cardNumber === 1){
      this.cardDescription = "share my work"
    }
    else if(cardNumber === 2){
      this.cardDescription = "hire a designer"
    }
    else if(cardNumber === 3){
      this.cardDescription = "inspire design"
    }
    this.userdetails.setNextComponentData({description:this.cardDescription})

    const checkbox = document.getElementById(`checkbox-${cardNumber}`);
    if (checkbox) {
      console.log(checkbox.ariaChecked);
      
      // Toggle the checked property based on current state
      // checkbox.checked = !checkbox.checked;
    }
  }
  onfinshBtn(){
    const profileData = this.userdetails.getProfileData();
    const nextComponentData = this.userdetails.getNextComponentData();

    // Combine the data if necessary
    const combinedData = {
      ...profileData,
      ...nextComponentData
    };

    console.log(combinedData);
    this.userdetails.updateUser(combinedData, this.userdetails.username).subscribe(()=>{
      this.router.navigate(['landing'])
    })
    
  }

}
