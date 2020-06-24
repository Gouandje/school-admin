export class Matiere {
    id: string;
    idSemestre: string;
    filiere: string;
    idNiveau: number;
    matiere: UE[]=[];
}

export class UE{
    codeMatiere: string;
    libeleMatiere: string;
    creditMatier: number;
    nombreHeure: number
}