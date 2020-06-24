import { Component, OnInit } from '@angular/core';
import { Filiere } from '../../models/filiere';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Resultat } from '../../models/resultat';
import { NiveauService } from '../../services/niveau.service';
import { FiliereService } from '../../services/filiere.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html'
})
export class FilieresComponent implements OnInit {

  filiereForm: FormGroup;
  resultat: Resultat<Filiere>;
  id: string;

  
  niveaux =  [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private filiereService: FiliereService
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){

      this.filiereService.getFiliereById(this.id).subscribe(
        res => {
          console.log(res);
          this.filiereForm.patchValue({
            id: res.body?.id,
          libelle: res.body?.libelle,
        description: res.body?.description,
        niveau: res.body.niveau?.libelle
      });

        });

    }

    this.niveauService.getAllNiveau().subscribe(
      res=>{
      this.niveaux = res.body;
        console.log(res)

      }
    )

    this.initForm()

  

  }

  filiereSubmit(){

    if(this.id){

      let obv = this.filiereForm.get('niveau').value;
      let obj:any = this.niveaux[obv];
      this.filiereForm.controls['niveau'].patchValue(obj);

      const formValue = this.filiereForm.value;
      
      this.filiereService.modifierFiliere(this.filiereForm.value).subscribe( data=> {
        console.log('filière mise à jour');
      });

    }else{
      let obv = this.filiereForm.get('niveau').value;
      let obj:any = this.niveaux[obv];
      this.filiereForm.controls['niveau'].patchValue(obj);

      const formValue = this.filiereForm.value;
      
       console.log(formValue);
      const newFiliere = new Filiere(
      formValue['id'],
      formValue['libelle'],
      formValue['description'],
      formValue['niveau']
      );
      console.log('value 2', formValue.niveau);
     
      
    this.filiereService.ajoutFiliere(newFiliere).subscribe(rest=>{
      console.log(newFiliere);
        console.log("operation reussi",rest);
      })
    

    }

    
  }

  private initForm() {
    const ab = new Filiere(null, null, "");
     this.filiereForm = this.fb.group({
       id: '',
       libelle: '',
       description: '',
       niveau: {}
     });
     
   }

}
