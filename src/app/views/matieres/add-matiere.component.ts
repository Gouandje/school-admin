import { Component, OnInit } from '@angular/core';
import { Matiere, UE } from '../../models/matiere';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html'
})
export class AddMatiereComponent implements OnInit {

  matiereForm: FormGroup;

  matiere = new Matiere();
  filiere = ['marketing digital', 'publicité digitale'];
  semestre = ['semestre 1', 'semestre 2'];
  niveau = ['Licence 1(L1)', 'Licence 2(L2)','Licence 3(L3)','Master 1(M1)', 'Master 2(M2)', 'Doctorat 1(D1)', 'Doctorat 2(D2)','Doctorat 3(D3)'];

  constructor(private fb: FormBuilder) { }

  addMatiere() {
    this.matiere.matiere.push(new UE());
  }
  deleteMatiere(event) {
    this.matiere.matiere.splice(event, 1);
  }

  ngOnInit(): void {

    
    
    this.initForm()


  }

  matieresubmit(){
    console.log(this.matiere);

  }

  private initForm() {
    // const ab = new Matiere(null, null, "", "" ,"");
     this.matiereForm = this.fb.group({
      id: '',
      Semestre: {},
      filiere: {},
      niveau: {},
      matiere: UE
     });
     
   }

}
