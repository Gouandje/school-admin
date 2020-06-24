import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class Auth0Service {
  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public routing:boolean;
 

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient, private router: Router, private spinner : NgxSpinnerService) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('access_token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public showSpinner(){
    // this.spinner.show(undefined,       {
    //   type: 'ball-fussion',
    //   size: 'small',
    //   color: 'white',
    //   fullScreen: true
    // });
    // this.routing=true;
    // setTimeout(()=>{
    //     this.routing =false;
    // },5000);
  }

  public hideSpinner(){
    // this.spinner.hide();
    // this.routing=false;
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    const tokenVal = token ? JSON.parse(localStorage.getItem('access_token')) : null;
    return tokenVal ? !this.jwtHelper.isTokenExpired(tokenVal.accessToken) : false;  
  }


  login(login: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/signin`, { login: login, password: password })
        .pipe(map(user => {
            localStorage.setItem('access_token', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout(){
      localStorage.removeItem('access_token');
      this.currentUserSubject.next(null);
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      // location.reload(true);

  }

}
