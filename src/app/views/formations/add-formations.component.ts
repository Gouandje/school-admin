import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resultat } from '../../models/resultat';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html'
})
export class AddFormationsComponent implements OnInit {

  msg: string = null;
  
  formationForm: FormGroup;
  resultat: Resultat<Formation>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formationService: FormationService) {
     
     }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){

      this.formationService.getFormationById(this.id).subscribe(
        res => {
          console.log(res);
          this.formationForm.patchValue({
            id: res.body.id,
          type: res.body.type,
        description: res.body.description});

        });

    }
    this.initForm();
  }

  onSubmit(){
    if(this.id){

      this.formationService.modifierFormation(this.formationForm.value).subscribe( data=> {
        console.log('formation mise à jour');
        this.msg = 'Formation modifiée avec succès!!';

      });

    }else{

      const formValue = this.formationForm.value;
      const newFormation = new Formation(
      formValue['id'],
      formValue['type'],
      formValue['description'] 
    )
    this.formationService.ajoutFormation(newFormation).subscribe(rest=>{
        console.log("operation reussi")
         this.msg = 'Formation enregistrée avec succès!!';

      })
      console.log(newFormation);

    }
      
  }

  private initForm() {
   const ab = new Formation(null, "", "");
    this.formationForm = this.fb.group({
      id: '',
      type: '',
      description: ''  
    });
    
  }


}
