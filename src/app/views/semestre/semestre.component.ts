import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NiveauService } from '../../services/niveau.service';
import { SemestreService } from '../../services/semestre.service';
import { Niveau } from '../../models/niveaux';
import { Resultat } from '../../models/resultat';
import { Semestre } from '../../models/semestre';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html'
})
export class SemestreComponent implements OnInit {

  niveau = [];
  resultat: Resultat<Semestre>;
  id: string;

  semestreForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private semestreService: SemestreService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){

      this.semestreService.getSemestreById(this.id).subscribe(
        res => {
          console.log(res);
          this.semestreForm.patchValue({
            id: res.body?.id,
            libelle: res.body?.libelle,
            niveau: res.body.niveau?.libelle});
        });
    }

    this.niveauService.getAllNiveau().subscribe( 
      res=>{
      this.niveau = res.body;
        console.log(this.niveau);

      }
    )


    this.initForm();
  }

  semestreSubmit(){

    if(this.id){

      let obv = this.semestreForm.get('niveau').value;
      let obj:any = this.niveau[obv];
      this.semestreForm.controls['niveau'].patchValue(obj);

      const formValue = this.semestreForm.value;
      
      this.semestreService.modifierSemestre(this.semestreForm.value).subscribe( data=> {
        console.log('filière mise à jour');
      });

    }else{
      let obv = this.semestreForm.get('niveau').value;
      let obj:any = this.niveau[obv];
      this.semestreForm.controls['niveau'].patchValue(obj);

      const formValue = this.semestreForm.value;
      
       console.log(formValue);
      const newSemestre = new Semestre(
      formValue['id'],
      formValue['libelle'],
      formValue['niveau']
      );
      console.log('value 2', formValue.niveau);
     
      
    this.semestreService.ajoutSemestre(newSemestre).subscribe(rest=>{
      console.log(newSemestre);
        console.log("operation reussi",rest.body);

      })
    

    }

  }

  private initForm() {
    const ab = new Semestre(null, null, "");
     this.semestreForm = this.fb.group({
       id: '',
       libelle: '',
       niveau: {}
     });
     
   }

}
