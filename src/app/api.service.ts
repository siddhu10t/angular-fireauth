import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL=environment.BASE_URL;

  constructor(private http:HttpClient) { }

  setUserData(user:any){
    return this.http.post(`${this.BASE_URL}/api/user`,user);
  }
}
