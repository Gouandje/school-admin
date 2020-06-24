import { Niveau } from './niveaux';

export class Semestre {
    constructor(
        public id?: string,
        public libelle?: string,
        public niveau?: Niveau,
    ){}
}
