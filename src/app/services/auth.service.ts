import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { BehaviorSubject, catchError, Observable, of, Subscriber } from 'rxjs';
import { IContact } from '../interfaces/contact';
@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private URL:string="http://localhost:3000/api/";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  // private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  private contactsList= [] 
  constructor(private http:HttpClient, private router:Router) {
   }
   

  //  getUserDetails(userName:string,password:string)
  //  {
  //      console.log("getUserDetails: "+userName+", "+password)
 
  //      let url:string='http://localhost:3000/api/users/isExist' 
  //      return this.http.get(url).toPromise();
    
  //  }

//users
  getUserDetails(userName:string,password:string)
  {
      console.log("getUserDetails: "+userName+", "+password)

      let url:string=this.URL+'users/isExist' 

      let httpOptions:Object = {
        
        headers: new HttpHeaders().set('Content-Type','application/json; charset=utf-8'),
       
        //params: params,
        responseType: 'text',
      }

      let inputdata:any={'userName':userName,
      'password':password

      }
      
      if(userName=="" || password=="")
      {
        Swal.fire('Please fill in all fields!');
        return;
      }
      return this.http.post<any>(url,inputdata, httpOptions).subscribe(data=>{

      if(data){
        console.log("RESULT from services:")
        console.log(data)

        var dataList=this.getUserContacts();

        console.log(dataList)
        // dataList.push()
        // this.contactsList=this.getUserContacts()
          //re direct to main page
          this.loggedIn.next(true);
          this.router.navigateByUrl('home')

      }
      else{
        Swal.fire({icon: 'error',text:"User isn't registered!"});
      }
    },error => {Swal.fire({icon: 'error',text:"Something went wrong..."});})
  }

  registerUser(userName:string,password:string)
  {
      console.log("getUserDetails: "+userName+", "+password)

      let url:string=this.URL+'users' 

      
      let httpOptions:Object = {
        
        headers: new HttpHeaders().set('Content-Type','application/json; charset=utf-8'),
        // params: params,
        responseType: 'text',
      }

      let inputdata:any={'userName':userName,
      'password':password

      }
      
      if(userName=="" || password=="")
      {
        Swal.fire('Please fill in all fields!');
        return;
      }
      
      return this.http.post<any>(url,inputdata, httpOptions).subscribe(data=>{
        console.log(data)
      if(data){

        if(data!="ERROR")
        {
          Swal.fire('Registration completed successfully !','The user is now registered!', "success");

        }
        else{
          Swal.fire({icon: 'error',text:"Registration failed!"});
        }
      }
    },
    error => {Swal.fire({icon: 'error',text:"User is already exists"});})
  }

  //contacts
  getUserContacts(): Promise<any>{

    let url:string='http://localhost:3000/api/contacts' 
    return this.http.get(url).toPromise();
}

// getUserContacts(): Observable<IContact[]> {
//   const url:string=this.URL+'contacts'
//   return this.http.get<IContact[]>(url)
//     .pipe(
//       catchError(this.handleError<IContact[]>('getUserContacts', []))
//     );
// }

  // getUserContacts()
  // {
  //     let url:string='https://localhost:3000/api/contact/getContacts' 
      
  //     return this.http.get<any>(url).subscribe(data=>{
  //     if(data){
  //       console.log("data getUserContacts:")
  //       if(data)
  //       {
  //         this.contactsList=data;
  //         console.log(this.contactsList)

  //       }
  //       else{

  //         console.log("There are no contacts!")
  //         //Swal.fire({icon: 'error',text:"There are no contacts!"});
  //       }
  //     }
  //     else{
  //       console.log("Contacts' Service failed!")
  //       //Swal.fire({icon: 'error',text:"Service's call failed"});
  //     }
  //   },error => { console.log("Something went wrong...")})
  // }

  // getUserContacts():Observable<IContact[]>
  // {

  //     let url:string='https://localhost:3000/api/contact/getContacts' 
      
  //     return this.http.get<IContact[]>(url)
  // }

  // getContactsList() {
  //   return this.contactsList; 

  // //   return Observable.create((observer: Subscriber<any>) => {
  // //     observer.next(this.contactsList);
  // //     observer.complete();
  // // });
  //   }

  //loging in & out
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
    }

  logout() { 
      this.loggedIn.next(false);
      this.redirectTo('login');
      }

  redirectTo(pageName:string){
    this.router.navigateByUrl('/'+pageName)
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
