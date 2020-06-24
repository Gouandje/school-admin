import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-list-certificat',
  templateUrl: './list-certificat.component.html'
})
export class ListCertificatComponent implements OnInit {


  constructor(private formationService: FormationService) { 
  }

  ngOnInit() {

    console.log("bienvenu");
    
  }

}
