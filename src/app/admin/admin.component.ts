import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isSignedIn=false;
  
  
  constructor(public firebaseService:AuthenticationService, private router:Router) { }


  ngOnInit() {
    if(localStorage.getItem('user')!==null) {
      this.isSignedIn=true;
    }
    else
      this.isSignedIn=false;
  }
  
  async onSignup(email:string,password:string) {
    await this.firebaseService.signUp(email,password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn=true
      this.router.navigate(['form']);
    }
  }

  async onSignin(email:string,password:string) {
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn=true
      this.router.navigate(['form']);
    }
  }

  handleLogout() {
    this.isSignedIn=false
  }

}
