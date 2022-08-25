import {Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactChosenComponent } from '../components/contactChosen/contact-chosen/contact-chosen.component';
import { RegisterUserComponent } from '../components/registerUser/register-user/register-user.component';
import { HelpComponent } from '../components/help/help/help.component';
import { AuthGuard } from './authGuard';


export let config:Routes=[

{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent,canActivate:[AuthGuard]},
{path:'contact', component:ContactChosenComponent},
{path:'registerUser', component:RegisterUserComponent},
{path:'help', component:HelpComponent,canActivate:[AuthGuard]},
{path:'contactChosen', component:ContactChosenComponent},
]