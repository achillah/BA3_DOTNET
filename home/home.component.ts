import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteApprentissage } from 'src/app/models/activiteApprentissage';
import { Capacite } from 'src/app/models/capacite';
import { Competence } from 'src/app/models/competences';
import { Cursus } from 'src/app/models/cursus';
import { Departement } from 'src/app/models/departement';
import { Enseignant } from 'src/app/models/enseignant';
import { Evaluation } from 'src/app/models/evaluation';
import { InfoUe } from 'src/app/models/infoUe';
import { UniteEtude } from 'src/app/models/uniteEtude';
import { ActiviteApprentissageService } from 'src/app/services/activiteApprentissage.service';
import { AuthService } from 'src/app/services/auth.service';
import { CapacitesService } from 'src/app/services/capactite.service';
import { CompetenceService } from 'src/app/services/competence.service';
import { CursusService } from 'src/app/services/cursus.service';
import { DepartementsService } from 'src/app/services/departement.service';
import { EnseignantsService } from 'src/app/services/enseignant.service';
import { EvaluationsService } from 'src/app/services/evaluation.service';
import { HomeService } from 'src/app/services/home.service';
import { InfoUesService } from 'src/app/services/infoUe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  url : any;
  capacites: Capacite[] = [];
  activiteApprentissages: ActiviteApprentissage[] = [];
  competences: Competence[] = [];
  cursus: Cursus[] = [];
  departements: Departement[] = [];
  evaluations: Evaluation[] = [];
  enseignants: Enseignant[] = [];
  infoUes: InfoUe[] = [];

  
  
  selectedNom: string = '';
  selectedCode: string = '';
  selectedOrientation: string = '';
  selectedCycle:  string = '';
  selectedBlocEtude:  string = '';
  selectedQuadrimestre:  string = '';
  selectedLangue:  string = '';
  selectedLangueEvaluation:  string = '';

  selectedDepartement: string = '';

  selectedCursusName: string = ''; 
  selectedCursusImplantation: string = ''; 
  selectedCursusTelephone: string = ''; 

  

  selectedCredit: string = '';
  selectedContenuSynthetique:  string = '';
  selectedMethodeApprendtissage:  string = '';
  selectedAcquis:  string = '';
  selectedNote:  string = '';


  selectedResponsable: string = '';
  selectedListTitulaireAA: string[] = [];

  selectedCompetences: number[] = [];

  selectedCapacites: number[] = [];

  selectedActiviteApprentissages: string[] =[];



  constructor(private authService: AuthService, 
              private activiteApprentissageService: ActiviteApprentissageService,
              private capacitesService: CapacitesService,
              private competenceService: CompetenceService,
              private cursusService: CursusService,
              private departementsService: DepartementsService,
              private evaluationsService: EvaluationsService,
              private enseignantsService: EnseignantsService,
              private infoUesService: InfoUesService,
              private router: Router, 
              private homeService: HomeService) {}

  ngOnInit() {
    this.getCapacite();
    this.getCompetence();
    this.getCursus();
    this.getActiviteApprentissage();
    this.getDepartement();
    this.getEnseignant();
    this.getInfoUe();
    }

  onSubmit(): void {
   
    console.log('Capacite:', this.selectedCapacites);
    console.log('Competence:', this.selectedCompetences);
    console.log('Activite Apprentissage:', this.selectedActiviteApprentissages);
    console.log('Titulaires AA:', this.selectedListTitulaireAA);



    console.log('Cursus Name:', this.selectedCursusName);
    console.log('Cursus Implantation:', this.selectedCursusImplantation);
    console.log('Cursus Telephone:', this.selectedCursusTelephone);
    console.log('Departement:', this.selectedDepartement);
    console.log('Responsable UE:', this.selectedResponsable);

    console.log('Nom UE:', this.selectedNom);
    console.log('Code UE:', this.selectedCode);
    console.log('Orientation UE:', this.selectedOrientation);
    console.log('Cycle UE:', this.selectedCycle);
    console.log('Bloc d\'etude UE:', this.selectedBlocEtude);
    console.log('Quadrimestre UE:', this.selectedQuadrimestre);
    console.log('Langue UE:', this.selectedLangue);
    console.log('Langue d\'evaluation UE:', this.selectedLangueEvaluation);

    console.log('Credit UE:', this.selectedCredit);
    console.log('Contenue synthetique UE:', this.selectedContenuSynthetique);
    console.log('Acquis UE:', this.selectedAcquis);
    console.log('Note UE:', this.selectedNote);
    console.log('Methode d\'apprentissage UE:', this.selectedMethodeApprendtissage);



    this.generateDoc()
  
  }

  async generateDoc(){

    this.url ="http://localhost:44331/api/UniteEtudes?champ1="+this.selectedNom+
    "&champ2="+(this.selectedCode)+
    "&champ3="+(this.selectedDepartement)+
    "&champ4="+(this.selectedCursusName)+
    "&champ5="+(this.selectedOrientation)+
    "&champ6="+(this.selectedCursusImplantation)+
    "&champ7="+(this.selectedCycle)+
    "&champ8="+(this.selectedBlocEtude)+
    "&champ9="+(this.selectedQuadrimestre)+
    "&champ10="+(this.selectedCredit)+
    "&champ11="+(this.selectedLangue)+
    "&champ12="+(this.selectedLangueEvaluation)+
    "&champ13="+(this.selectedResponsable)+
    "&champ14="+(this.selectedListTitulaireAA)+
    "&champ15="+(this.selectedCompetences)+
    "&champ16="+(this.selectedCapacites)+
    "&champ17="+(this.selectedAcquis)+
    "&champ18="+(this.selectedContenuSynthetique)+
    "&champ19="+(this.selectedMethodeApprendtissage)+
    "";
    window.open(this.url, "_blank");

  }

  getActiviteApprentissage(): void {
    this.activiteApprentissageService.getActiviteApprentissages().subscribe(
      (data: ActiviteApprentissage[]) => {
        this.activiteApprentissages = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getCapacite(): void {
    this.capacitesService.getCapacites().subscribe(
      (data: Capacite[]) => {
        this.capacites = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getCompetence(): void {
    this.competenceService.getCompetences().subscribe(
      (data: Competence[]) => {
        this.competences = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getCursus() {
    this.cursusService.getCursus().subscribe(
      (data: Cursus[]) => {
        this.cursus = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  

  getDepartement(): void {
    this.departementsService.getDepartements().subscribe(
      (data: Departement[]) => {
        this.departements = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getEvaluation(): void {
    this.evaluationsService.getEvaluations().subscribe(
      (data: Evaluation[]) => {
        this.evaluations = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getEnseignant(): void {
    this.enseignantsService.getEnseignants().subscribe(
      (data: Enseignant[]) => {
        this.enseignants = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getInfoUe(): void {
    this.infoUesService.getInfoUes().subscribe(
      (data: InfoUe[]) => {
        this.infoUes = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  logOut()
  {
    this.authService.removeToken();
    this.router.navigateByUrl('/login');
  }


  navigateToActiviteApprentissage() {
    this.router.navigateByUrl('/activiteApprentissage');
  }

  navigateToCapacite() {
    this.router.navigateByUrl('/capacite');
  }

  navigateToCompetence() {
    this.router.navigateByUrl('/competence');
  }

  navigateToCursus() {
    this.router.navigateByUrl('/cursus');
  }

  navigateToDepartement() {
    this.router.navigateByUrl('/departement');
  }

  navigateToEnseignant() {
    this.router.navigateByUrl('/enseignant');
  }

  navigateToEvaluation() {
    this.router.navigateByUrl('/evaluation');
  }

  navigateToInfoUe() {
    this.router.navigateByUrl('/infoUe');
  }
  
}
