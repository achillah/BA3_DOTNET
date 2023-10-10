// unite-etude.ts (dans le dossier models)

import { ActiviteApprentissage } from "./activiteApprentissage";
import { Capacite } from "./capacite";
import { Competence } from "./competences";
import { Cursus } from "./cursus";
import { Departement } from "./departement";
import { Enseignant } from "./enseignant";

export class UniteEtude {
    id!: number;
    name!: string;
    code!: string;
    idDepartement!: number | null;
    departement!: Departement | null;
    idCursus!: number | null;
    cursus!: Cursus | null;
    orientation!: string;
    credit!: number;
    cycle!: number;
    blocEtude!: number;
    quadrimestre!: number;
    langue!: string;
    langueEvaluation!: string;
    contenuSynthetique!: string;
    methodeApprendtissage!: string;
    acquis!: string;
    note!: string;
    prerequises!: UniteEtude[];
    corequises!: UniteEtude[];
    idResponsableUe!: number | null;
    responsable!: Enseignant | null;
    listTitulaireAA!: Enseignant[];
    listCompetences!: Competence[];
    listCapacites!: Capacite[];
    listActiviteApprentissages!: ActiviteApprentissage[];
  }
  
  
  