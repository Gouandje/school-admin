import { Component } from '@angular/core';
import { Auth0Service } from '../../services/auth0.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
login:any;
password:any;
  constructor(public auth0: Auth0Service, private router: Router, private route: ActivatedRoute){

  }

    singin(){
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
       // console.log(returnUrl);
        let finamR = returnUrl ? returnUrl : 'dashboard';
        this.auth0.login(this.login, this.password).subscribe((response)=>{
          if(response){
           // console.log(finamR);
            this.router.navigate([finamR]);
          }
           // console.log(response);
        },
        (error)=>{
            console.error(error);
        });

    }
  
}
