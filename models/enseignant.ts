// enseignant.ts (dans le dossier models)

import { ActiviteApprentissage } from "./activiteApprentissage";

export class Enseignant {
    id!: number;
    lastname!: string;
    firstname!: string;
    email!: string;
    listActiviteApprentissages!: ActiviteApprentissage[] | null;

    // listUniteEtudes: UniteEtude[] | null; // Si vous définissez le modèle pour UniteEtude
  }
  
  
  