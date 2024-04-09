import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private httpClient: HttpClient){}

  registerUSer(payload: {}):Observable<any>{
    console.log(payload);
    
    return this.httpClient.post(`http://localhost:8080/user/register`,payload)

  }
}
