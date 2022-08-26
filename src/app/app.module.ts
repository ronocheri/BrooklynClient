import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactChosenComponent } from './components/contactChosen/contact-chosen/contact-chosen.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { RegisterUserComponent } from './components/registerUser/register-user/register-user.component';
import { HelpComponent } from './components/help/help/help.component';
import { ContactsListComponent } from './components/contacstList/contacts-list/contacts-list.component';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
// import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactChosenComponent,
    NavbarComponent,
    RegisterUserComponent,
    HelpComponent,
    ContactsListComponent,
    SortPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    // NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
