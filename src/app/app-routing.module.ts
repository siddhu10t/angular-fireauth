import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'form',  component: FormComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
