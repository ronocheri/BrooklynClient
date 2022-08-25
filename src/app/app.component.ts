import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from './interfaces/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BrooklynLogin';
  id="";
  errorMessage: any;
  // sortContacts?:IContact[];
  // url="https://authapi-ariel.ssl.imc-companies.com/token/gettoken"
  // token= "";
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    //this.sendRequest()
    //this.gettoken()
  }

public gettoken():string
{

console.log('gettoken 1:');
let siteType:string='global';
siteType ='local';

let model:any;
let LoginURLTokenID:string ='be7f01bf-7ef6-47d2-b613-46cf46341fde';
let LoginURLTokenSecret:string ='Z/5AhwVt6TfJL[G=@Hf7LG91Re2gc7.y';

let sUrl:string='https://authapi-ariel.ssl.imc-companies.com/' + 'token/gettoken';//?client_id=' + LoginURLTokenID + '&client_secret=' + LoginURLTokenSecret + '&siteType=' + siteType;
const params = new HttpParams()
.set('client_id', LoginURLTokenID)
.set('client_secret', LoginURLTokenSecret)
.set('sitetype', siteType);

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
params: params
};

const body = { title: 'Angular POST Request Example' };

this.http.post<any>(sUrl, body, httpOptions).subscribe(data => {
// this.token = data.token;
// console.log("this.token from gettoken1: " + this.token);

});
return 'true';
}

public sendRequest()
{
  const url2="http://www.iscar.com/wsIscarCat/IscarData.asmx/GetItemsListISOAllJson?lang=en&vers=m&familyNumber=3262&sTool=T"
  // const headerDict = {
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  // }
  

  const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8','Accept': 'application/json','Access-Control-Allow-Headers': 'Content-Type'});
 

  const httpOptions = {                                                                                                                                                                                 
    headers:headers, 
  };
  
  this.http.get(url2, httpOptions).subscribe(data => {
    // this.token = data;
    console.log(data);
    
    });


  //const url2="https://localhost:44372/api/friend"

  // this.http.get(url2).subscribe(data1 => {

  //   console.log(data1);
    
  //   });
}



}
