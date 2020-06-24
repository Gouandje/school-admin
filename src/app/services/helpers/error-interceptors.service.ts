import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import {Auth0Service} from '../auth0.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ErrorInterceptorsService implements HttpInterceptor {
    constructor(private authenticationService: Auth0Service, private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log(1);
        return next.handle(request).pipe( tap(evt => {
            const isApiUrl = request.url.startsWith(environment.apiUrl);
            //console.log(this.authenticationService);
            if (request.method != "GET") {
                if (evt instanceof HttpResponse) {
                    if(evt.status === 200 && evt.body.status === 0){
                        this.showSuccess(evt.body.messages ? evt.body.messages : 'succès de la requête',"Retour de la requête");
                        // this.authenticationService.hideSpinner();
                        return false;
                    }else{
                        // this.authenticationService.hideSpinner();
                    }   

                    if(evt.status === 200 && evt.body.status === 1){
                        this.showW(evt.body.messages? evt.body.messages : 'Echèc de la requête',"Retour de la requête");
                        // this.authenticationService.hideSpinner();
                        return false;
                    }else{
                        // this.authenticationService.hideSpinner();
                    }   
                 }else{
                    // this.authenticationService.hideSpinner();
                 }   
            }else{
                if (evt instanceof HttpResponse) {  

                    if(evt.status !== 200 || evt.body.status === 1){
                        //this.showError("Veuillez vérifier votre connexion internet et réessayer svp !","Erreur de connexion");
                        // this.authenticationService.hideSpinner();
                        return false;
                    }else{
                        // this.authenticationService.hideSpinner();
                    } 
                 }else{
                    // this.authenticationService.hideSpinner();
                        //this.showError("Veuillez vérifier votre connexion internet et réessayer svp !","Erreur de connexion");
                 }                 
            }

        }),
        catchError(err => {
            //console.log('aaaaaaaaaaaaaaaa',err);
            if(err){
                // this.authenticationService.hideSpinner();


                        if (err.status === 401) {
                            // deconnexion si erreur header 401 detecter
                            this.showW("Veuillez vous connectez pour avoir accès a cette ressource ! ","Accès expiré");
                            this.authenticationService.logout();
                        }

                        if(err.status === 403){
                            this.showError("Route d'accès inconnu par le serveur !","Retour de la requête");
                        }

                        if((err.status !== 200 || err.status !== 401 || err.status !== 403) && err.body && err.body.status !== 0){
                            this.showError(err.body.messages,"Retour de la requête");
                        }
                        if(err.status === 0 && err.statusText == "Unknown Error"){
                            this.showError("serveur defaillant. Veuillez réessayez svp","Retour de la requête");
                        }
                        if(err.status === 0 && err.statusText !== "Unknown Error"){
                            this.showError(err.statusText,"Retour de la requête");
                        }
                            //console.log(err);

             }else{
                // this.authenticationService.hideSpinner();
                this.showError("Veuillez vérifier votre connexion internet et réessayer svp !","Erreur de connexion"); 
             }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    showSuccess(text, titre) {
        this.toastr.success(text, titre, { positionClass: 'toast-top-right' });
      }
    
      showError(text, titre){
        this.toastr.error(text, titre);
      }
    
      showW(text, titre){
        this.toastr.warning(text, titre);
      }
}