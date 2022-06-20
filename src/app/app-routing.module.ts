import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegistrationComponent } from './modals/registration/registration.component';


const routes: Routes = [
  // {path:''},
  {path:'login-modual', component:LoginModalComponent},
  {path:'registration', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
