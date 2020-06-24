import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Auth0Service} from '../services/auth0.service';

@Injectable({ providedIn: 'root' })
export class AccesGuardService implements CanActivate {

  constructor(        
    private router: Router, public auth: Auth0Service
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      if (this.auth.isAuthenticated()) { 
        //let urlr = state.url ? state.url : 'dashboard';
        this.router.navigate(['/dashboard']);
        return false; 
      } 
      return true; 
  }

}
