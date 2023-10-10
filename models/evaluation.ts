// evaluation.ts (dans le dossier models)

export class Evaluation {
    id!: number;
    session!: string;
    mois!: number;
    type!: string;
    noteFinal!: string;
    pourcentageFinal!: number | null;
    idUniteEtude!: number | null;
    pourcentageRemediable!: string;
  }
  