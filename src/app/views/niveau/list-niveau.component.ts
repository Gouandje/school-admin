import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-list-niveau',
  templateUrl: './list-niveau.component.html'
})
export class ListNiveauComponent implements OnInit {

  niveaux = [];

  constructor(private niveauService: NiveauService) { }

  ngOnInit(): void {

    this.niveauService.getAllNiveau().subscribe( 
      res=>{
      this.niveaux = res.body;
        console.log(this.niveaux);

      }
    )
  }


  onDelete(id){
 
    if (confirm('Voulez-vous supprimer ce niveau ?:' +id)) {
      this.niveauService.supprimerNiveau(id).subscribe(
        res => {
          this.fetchData();
          console.log(res);
          
        }

      );
      
    }

  }

  fetchData() {
    this.niveauService.getAllNiveau().subscribe(res =>{
        this.niveaux = res.body;
    });
}

}
