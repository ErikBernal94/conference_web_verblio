import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component:  ConferenceComponent},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
