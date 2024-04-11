import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';




@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule,NgStyle,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  faCamera = faCamera
  selectedImage: any = null;
  location: string = "";
  file:any

  profileData: {} ={}

  constructor(private router: Router, private userdataService:UserDataService){}



  
  onFileChange(event: any): void {
     this.file = event.target.files[0]

    console.log(this.file);
    
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result;
      };
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit(){
    this.profileData = {location: this.location, image: this.file}
    this.userdataService.setProfileData(this.profileData)
   this.router.navigate(['profile-details'])
  
 
  //  this.userData.location = this.location;

   

   
  }

}
