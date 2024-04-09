import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpclient: HttpClient) { }

  private profileData:any
  private nextComponentData: any;

 userEmail: string | null | undefined ="";
 username:string | null | undefined =""

  setProfileData(data: any) {
    this.profileData = data;
  }

  getProfileData() {
    return this.profileData;
  }

  setNextComponentData(data: any) {
    this.nextComponentData = data;
  }

  getNextComponentData() {
    return this.nextComponentData;
  }

  updateUser(payload:any,username:string | null | undefined):Observable<any>{
    console.log(username);
    
    console.log(payload);
    
    return this.httpclient.patch(`http://localhost:8080/user/update/${username}`, payload)
  }

}
