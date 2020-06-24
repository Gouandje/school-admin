import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from '../models/resultat';
import { Observable, Subject } from 'rxjs';
import { Semestre } from '../models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  private urlSemestre = 'http://192.168.1.199:8080/Semestre';
  
  
 
  
  // observables sources
  private semestreCreerSource = new Subject<Resultat<Semestre>>();
  private semestreModifSource = new Subject<Resultat<Semestre>>();
  private semestreFiltreSource = new Subject<string>();
 

// observables streams
semestreCreer$ = this.semestreCreerSource.asObservable();
semestreModif$ = this.semestreModifSource.asObservable();
semestreFiltre$ = this.semestreFiltreSource.asObservable();
  

  constructor(private  http: HttpClient) {
  }

  getAllSemestre(): Observable<Resultat<Semestre[]>> {
    return this.http.get<Resultat<Semestre[]>>(this.urlSemestre);
  }

  ajoutSemestre(ab: Semestre): Observable<Resultat<Semestre>> {
    console.log('methode du service qui ajoute une filiere');
    return this.http.post<Resultat<Semestre>>(this.urlSemestre, ab);
  }

  modifierSemestre(abModif: Semestre): Observable<Resultat<Semestre>> {
    return this.http.put<Resultat<Semestre>>(this.urlSemestre, abModif);
  }


  getSemestreById(id: string): Observable<Resultat<Semestre>> {
    return this.http.get<Resultat<Semestre>>(`${this.urlSemestre}/${id}`)
  }
  
// supprimer un Semestre
supprimerSemestre(id: string): Observable<Resultat<boolean>> {
  return this.http.delete<Resultat<boolean>> (`${this.urlSemestre}/${id}`);
}

SemestreCreer(res: Resultat<Semestre>) {
    console.log('Semestre a ete  creer correctement essaie source');
    this.semestreCreerSource.next(res);
  }

  SemestreModif(res: Resultat<Semestre>) {
    this.semestreModifSource.next(res);
  }

  filtreSemestre(text: string) {
    this.semestreFiltreSource.next(text);
  }
}
