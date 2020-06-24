import { Niveau } from './niveaux';

export class Filiere {
   
   constructor(
    public id?: string,
    public libelle?: string,
    public description?: string,
    public niveau?: Niveau,
){}
}
