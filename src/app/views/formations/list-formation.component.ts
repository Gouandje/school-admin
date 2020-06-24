import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation';
import { Resultat } from '../../models/resultat';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html'
})
export class ListFormationComponent implements OnInit {
  
  
  formations= [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getAllFormation().subscribe( 
      res=>{
      this.formations = res.body;
        console.log(this.formations);

      }
    )
  }
  onDelete(id){
 
    if (confirm('Voulez-vous supprimer cette formation?id= '+id)) {
      this.formationService.supprimerFormation(id).subscribe(
        res => {
          console.log(res);
        }
      );
    }

  }

}
