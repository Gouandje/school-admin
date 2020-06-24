import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Resultat } from '../../models/resultat';
import { Filiere } from '../../models/filiere';
import { Niveau } from '../../models/niveaux';
import { NiveauService } from '../../services/niveau.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FiliereService } from '../../services/filiere.service';

@Component({
  selector: 'app-add-niveau',
  templateUrl: './add-niveau.component.html'
})
export class AddNiveauComponent implements OnInit {

  
  
  msg: string = null;
  
  niveauForm: FormGroup;
  resultat: Resultat<Filiere>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private niveauService: NiveauService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){

      this.niveauService.getNiveauById(this.id).subscribe(
        res => {
          console.log(res);
          this.niveauForm.patchValue({
            id: res.body?.id,
            libelle: res.body?.libelle,
            });
        });
    }

    this.initForm();
  }

  niveauSubmit(){
    
    if(this.id){

      this.niveauService.modifierNiveau(this.niveauForm.value).subscribe( data=> {
        console.log('niveau mis à jour');


      });

    }else{

      const formValue = this.niveauForm.value;
      const newNiveau = new Niveau(
      formValue['id'],
      formValue['libelle'] 
    )
    this.niveauService.ajoutNiveau(newNiveau).subscribe(rest=>{
        console.log("operation reussi")

      })
      console.log(newNiveau);

    }

  }

  private initForm() {
    const ab = new Niveau(null, "");
     this.niveauForm = this.fb.group({
       id: '',
       libelle: ''
     });
     
   }

}
