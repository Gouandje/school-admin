import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Auth0Service} from '../services/auth0.service';
import decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router, private authenticationService : Auth0Service, public auth: Auth0Service, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authenticationService.showSpinner();
    const expectedRole = parseInt(route.data.id);
    const token = localStorage.getItem('access_token');
    const tokenValeur = token? JSON.parse(localStorage.getItem('access_token')) : '';
    if(tokenValeur && token){


    const tokenPayload = decode(tokenValeur.accessToken);
    //console.log(tokenPayload.roles[0].authority);
    if (!this.auth.isAuthenticated()) {
      this.showW("Veuillez vous connectez pour avoir accès a cette ressource ! ","Violation d'accès");
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      console.error('token manquant ligne 23 role-guard', 1);
      return false;
    }

    if(!expectedRole){
      //this.showW("Vous n'avez pas l'autorisation nécessaire pour acceder à cette ressource !","accès non autorisé");
      //this.router.navigate([state.url]);
      return true;
    }else{
      if(!JSON.parse(tokenPayload.roles[0].authority).includes(expectedRole)){
        this.router.navigate(['denied/5ee78bfcd6f244072fbeb48c']);// doit avoir le liens de la page access not permitted
        console.error('acces non autorisé', 2);
        this.showW("Vous n'avez pas l'autorisation nécessaire pour acceder à cette ressource !","accès non autorisé");
        return false; 
      }
    }



    return true;
  }else{
    this.showW("Veuillez vous connectez pour avoir accès a cette ressource ! ","Violation d'accès");
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    console.exception('tv d', 3);
    return false;
  }
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError(text, titre){
    this.toastr.error(text, titre);
  }

  showW(text, titre){
    this.toastr.error(text, titre);
  }


}
