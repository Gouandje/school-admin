import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Subject, Observable } from 'rxjs';
import { Resultat } from '../models/resultat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private urlFormation = 'http://192.168.1.199:8080/formation';
  
  
 
  
  // observables sources
  private formationCreerSource = new Subject<Resultat<Formation>>();
  private formationModifSource = new Subject<Resultat<Formation>>();
  private formationFiltreSource = new Subject<string>();
 

// observables streams
formationCreer$ = this.formationCreerSource.asObservable();
formationModif$ = this.formationModifSource.asObservable();
formationFiltre$ = this.formationFiltreSource.asObservable();
  

  constructor(private  http: HttpClient) {
  }

  getAllFormation(): Observable<Resultat<Formation[]>> {
    console.log('methode du service qui recupre toutes les  formations');
    return this.http.get<Resultat<Formation[]>>(this.urlFormation);
  }

  ajoutFormation(ab: Formation): Observable<Resultat<Formation>> {
    console.log('methode du service qui ajoute une formation', ab);
    return this.http.post<Resultat<Formation>>(this.urlFormation, ab);
  }

  modifierFormation(abModif: Formation): Observable<Resultat<Formation>> {
    return this.http.put<Resultat<Formation>>(this.urlFormation, abModif);
  }

  getFormationById(id: string): Observable<Resultat<Formation>> {
    return this.http.get<Resultat<Formation>>(`${this.urlFormation}/${id}`)
  }
  
// supprimer un formation
supprimerFormation(id: string): Observable<Resultat<boolean>> {
  return this.http.delete<Resultat<boolean>> (`${this.urlFormation}/${id}`);
}

   formationCreer(res: Resultat<Formation>) {
    console.log('Formation a ete  creer correctement essaie source');
    this.formationCreerSource.next(res);
  }

  formationModif(res: Resultat<Formation>) {
    this.formationModifSource.next(res);
  }

  filtreFormation(text: string) {
    this.formationFiltreSource.next(text);
  }
}
