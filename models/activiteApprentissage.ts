// activite-apprentissage.ts (dans le dossier models)

import { Enseignant } from "./enseignant";
import { Evaluation } from "./evaluation";

export class ActiviteApprentissage {
    id!: number;
    name!: string;
    idUniteEtude!: number | null;
    evaluationAA!: Evaluation | null; // Si vous définissez le modèle pour Evaluation
  }
  

  