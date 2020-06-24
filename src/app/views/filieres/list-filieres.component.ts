import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../../services/filiere.service';

@Component({
  selector: 'app-list-filieres',
  templateUrl: './list-filieres.component.html'
})
export class ListFilieresComponent implements OnInit {

  filieres = [];

  constructor(private filiereService: FiliereService) { }

  ngOnInit(): void {

    this.filiereService.getAllFiliere().subscribe( 
      res=>{
      this.filieres = res.body;
        console.log(this.filieres);

      }
    )
  }

  onDelete(id){
 
    if (confirm('Voulez-vous supprimer cette formation?id= '+id)) {
      this.filiereService.supprimerFiliere(id).subscribe(
        res => {
          console.log(res);
          
        }
      );
    }

  }

}
