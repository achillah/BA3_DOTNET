import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ActiviteApprentissageComponent } from './components/activite-apprentissage/activite-apprentissage.component';
import { CapaciteComponent } from './components/capacite/capacite.component';
import { CompetenceComponent } from './components/competence/competence.component';
import { CursusComponent } from './components/cursus/cursus.component';
import { DepartementComponent } from './components/departement/departement.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { InfoUeComponent } from './components/info-ue/info-ue.component';
import { AddInfoUeComponent } from './components/add-info-ue/add-info-ue.component';
import { AddCapaciteComponent } from './components/add-capacite/add-capacite.component';
import { AddCompetenceComponent } from './components/add-competence/add-competence.component';
import { AddCursusComponent } from './components/add-cursus/add-cursus.component';
import { AddDepartementComponent } from './components/add-departement/add-departement.component';
import { AddEnseignantComponent } from './components/add-enseignant/add-enseignant.component';
import { AddEvaluationComponent } from './components/add-evaluation/add-evaluation.component';
import { EditCapaciteComponent } from './components/edit-capacite/edit-capacite.component';
import { EditCompetenceComponent } from './components/edit-competence/edit-competence.component';
import { EditCursusComponent } from './components/edit-cursus/edit-cursus.component';
import { EditDepartementComponent } from './components/edit-departement/edit-departement.component';
import { EditInfoUeComponent } from './components/edit-info-ue/edit-info-ue.component';
import { EditEnseignantComponent } from './components/edit-enseignant/edit-enseignant.component';
import { AddActiviteApprentissageComponent } from './components/add-activite-apprentissage/add-activite-apprentissage.component';
import { EditEvaluationComponent } from './components/edit-evaluation/edit-evaluation.component';
import { EditActiviteApprentissageComponent } from './components/edit-activite-apprentissage/edit-activite-apprentissage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'activiteApprentissage',
    component: ActiviteApprentissageComponent
  },
  {
    path: 'capacite',
    component: CapaciteComponent
  },
  {
    path: 'competence',
    component: CompetenceComponent
  },
  {
    path: 'cursus',
    component: CursusComponent
  },
  {
    path: 'departement',
    component: DepartementComponent
  },
  {
    path: 'enseignant',
    component: EnseignantComponent
  },
  {
    path: 'evaluation',
    component: EvaluationComponent
  },
  {
    path: 'infoUe',
    component: InfoUeComponent
  },
  {
    path: 'addActiviteApprentissage',
    component: AddActiviteApprentissageComponent
  },
  {
    path: 'addCapacite',
    component: AddCapaciteComponent
  },
  {
    path: 'addCompetence',
    component: AddCompetenceComponent
  },
  {
    path: 'addCursus',
    component: AddCursusComponent
  },
  {
    path: 'addDepartement',
    component: AddDepartementComponent
  },
  {
    path: 'addEnseignant',
    component: AddEnseignantComponent
  },
  {
    path: 'addEvaluation',
    component: AddEvaluationComponent
  },
  {
    path: 'addInfoUe',
    component: AddInfoUeComponent
  },
  {
    path: 'editActiviteApprentissage/:id',
    component: EditActiviteApprentissageComponent
  },
  {
    path: 'editCapacite/:id',
    component: EditCapaciteComponent
  },
  {
    path: 'editCompetence/:id',
    component: EditCompetenceComponent
  },
  {
    path: 'editCursus/:id',
    component: EditCursusComponent
  },
  {
    path: 'editDepartement/:id',
    component: EditDepartementComponent
  },
  {
    path: 'editEnseignant/:id',
    component: EditEnseignantComponent
  },
  {
    path: 'editEvaluation/:id',
    component: EditEvaluationComponent
  },
  {
    path: 'editInfoUe/:id',
    component: EditInfoUeComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
