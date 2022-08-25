import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {config} from './routeConfig';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
