import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  @Output() isLogout=new EventEmitter<void>()
  constructor(public firebaseService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate(['home'])
  }
}
