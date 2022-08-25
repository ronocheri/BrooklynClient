import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$?: Observable<boolean>; 
  
  constructor(private route: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout()
  {
    Swal.fire({
      title: 'Do you want to logout?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result: { isConfirmed: any; isDenied: any; }) => {
      if (result.isConfirmed) {
        this.authService.logout();
      } else if (result.isDenied) {
        
      }
    })
  }

  redirectPageTo(pageName:string)
  {
    this.authService.redirectTo(pageName)
  }

  profile()
  {
    Swal.fire(('Under building...'))
  }

}