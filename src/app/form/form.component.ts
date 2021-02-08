import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm:any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit():void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      city: new FormControl(''),
      county: new FormControl(''),
      state: new FormControl(''),
      zipcode: new FormControl(''),
      country: new FormControl(''),
      prefLang: new FormControl(''),
      prefContact: new FormControl(''),
      email: new FormControl(''),
      confirmEmail: new FormControl(''),
      phone: new FormControl(''),
      license: new FormControl(''),
      licFromFlorida: new FormControl(''),
      licAddressCurrent: new FormControl(''),
      consent: new FormControl('')
    });
  }

  onFormSubmit() {
    console.log(this.profileForm.value);
    this.api.setUserData(this.profileForm.value).subscribe(
      (resp:any)=> {
        console.log(resp);
        this.router.navigate(['/thankyou']);
      },
      (err:any)=> {
        console.error(err);
        alert("Error");
      }
    );
  }

}
