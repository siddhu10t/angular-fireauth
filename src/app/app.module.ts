import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationService } from './services/authentication.service';

var config = {
  apiKey: "AIzaSyBwNy9R92oLysC5ONOhmPtopNjEySBzh2k",
  authDomain: "fir-flask-2d613.firebaseapp.com",
  databaseURL: "https://fir-flask-2d613-default-rtdb.firebaseio.com",
  projectId: "fir-flask-2d613",
  storageBucket: "fir-flask-2d613.appspot.com",
  messagingSenderId: "977975871961",
  appId: "1:977975871961:web:22a9e565bd82a4057771c8",
  measurementId: "G-4V8LM5RV0L"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    ThankyouComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
