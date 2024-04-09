import { NgClass } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){}

  
  
  onclicked(cardNumber: number){
    console.log(cardNumber);
    
    this.selectedCard = cardNumber
    this.onselected = true

    const checkbox = document.getElementById(`checkbox-${cardNumber}`);
    if (checkbox) {
      console.log(checkbox.ariaChecked);
      
      // Toggle the checked property based on current state
      // checkbox.checked = !checkbox.checked;
    }
  }
  onfinshBtn(){
    this.router.navigate(['landing'])
  }

}
