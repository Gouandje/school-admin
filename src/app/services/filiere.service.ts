import { Injectable } from '@angular/core';
import { Filiere } from '../models/filiere';
import { Subject, Observable} from 'rxjs';
import { Resultat } from '../models/resultat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private urlFiliere = 'http://192.168.1.199:8080/filiere';
  
  
 
  
  // observables sources
  private filiereCreerSource = new Subject<Resultat<Filiere>>();
  private filiereModifSource = new Subject<Resultat<Filiere>>();
  private filiereFiltreSource = new Subject<string>();
 

// observables streams
filiereCreer$ = this.filiereCreerSource.asObservable();
filiereModif$ = this.filiereModifSource.asObservable();
filiereFiltre$ = this.filiereFiltreSource.asObservable();
  

  constructor(private  http: HttpClient) {
  }

  getAllFiliere(): Observable<Resultat<Filiere[]>> {
    return this.http.get<Resultat<Filiere[]>>(this.urlFiliere);
  }

  ajoutFiliere(ab: Filiere): Observable<Resultat<Filiere>> {
    console.log('methode du service qui ajoute une filiere');
    return this.http.post<Resultat<Filiere>>(this.urlFiliere, ab);
  }

  modifierFiliere(abModif: Filiere): Observable<Resultat<Filiere>> {
    return this.http.put<Resultat<Filiere>>(this.urlFiliere, abModif);
  }

g
  getFiliereById(id: string): Observable<Resultat<Filiere>> {
    return this.http.get<Resultat<Filiere>>(`${this.urlFiliere}/${id}`)
  }
  
// supprimer un filiere
supprimerFiliere(id: string): Observable<Resultat<boolean>> {
  return this.http.delete<Resultat<boolean>> (`${this.urlFiliere}/${id}`);
}

   filiereCreer(res: Resultat<Filiere>) {
    console.log('Filiere a ete  creer correctement essaie source');
    this.filiereCreerSource.next(res);
  }

  filiereModif(res: Resultat<Filiere>) {
    this.filiereModifSource.next(res);
  }

  filtreFiliere(text: string) {
    this.filiereFiltreSource.next(text);
  }
}
