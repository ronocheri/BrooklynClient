import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService) {
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        

        var isLoggedIn:boolean=true;

        this.authService.isLoggedIn.subscribe(myBool => isLoggedIn = myBool);
        console.log(isLoggedIn)
        if(!isLoggedIn)
        this.authService.redirectTo("login")
        return isLoggedIn;
        //return this.authService.isLoggedIn.value
        

        // console.log("false")
        // return false
    }
}
