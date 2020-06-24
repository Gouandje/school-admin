import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from '../models/resultat';
import { Niveau } from '../models/niveaux';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private urlFiliere = 'http://192.168.1.199:8080/niveau';
  
  
 
  
  // observables sources
  private niveauCreerSource = new Subject<Resultat<Niveau>>();
  private niveauModifSource = new Subject<Resultat<Niveau>>();
  private niveauFiltreSource = new Subject<string>();
 

// observables streams
niveauCreer$ = this.niveauCreerSource.asObservable();
niveauModif$ = this.niveauModifSource.asObservable();
niveauFiltre$ = this.niveauFiltreSource.asObservable();
  

  constructor(private  http: HttpClient) {
  }

  getAllNiveau(): Observable<Resultat<Niveau[]>> {
    return this.http.get<Resultat<Niveau[]>>(this.urlFiliere);
  }

  ajoutNiveau(ab: Niveau): Observable<Resultat<Niveau>> {
    console.log('methode du service qui ajoute une filiere');
    return this.http.post<Resultat<Niveau>>(this.urlFiliere, ab);
  }

  modifierNiveau(abModif: Niveau): Observable<Resultat<Niveau>> {
    return this.http.put<Resultat<Niveau>>(this.urlFiliere, abModif);
  }


  getNiveauById(id: string): Observable<Resultat<Niveau>> {
    return this.http.get<Resultat<Niveau>>(`${this.urlFiliere}/${id}`)
  }
  
// supprimer un niveau
supprimerNiveau(id: string): Observable<Resultat<boolean>> {
  return this.http.delete<Resultat<boolean>> (`${this.urlFiliere}/${id}`);
}

niveauCreer(res: Resultat<Niveau>) {
    console.log('Niveau a ete  creer correctement essaie source');
    this.niveauCreerSource.next(res);
  }

  niveauModif(res: Resultat<Niveau>) {
    this.niveauModifSource.next(res);
  }

  filtreNieau(text: string) {
    this.niveauFiltreSource.next(text);
  }
}
