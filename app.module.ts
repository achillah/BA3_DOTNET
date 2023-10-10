import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componenets/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
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
import { AddCursusComponent } from './components/add-cursus/add-cursus.component';
import { AddCompetenceComponent } from './components/add-competence/add-competence.component';
import { AddDepartementComponent } from './components/add-departement/add-departement.component';
import { AddEnseignantComponent } from './components/add-enseignant/add-enseignant.component';
import { AddEvaluationComponent } from './components/add-evaluation/add-evaluation.component';
import { AddActiviteApprentissageComponent } from './components/add-activite-apprentissage/add-activite-apprentissage.component';
import { AddUniteEtudeComponent } from './components/add-unite-etude/add-unite-etude.component';
import { EditCapaciteComponent } from './components/edit-capacite/edit-capacite.component';
import { EditCompetenceComponent } from './components/edit-competence/edit-competence.component';
import { EditCursusComponent } from './components/edit-cursus/edit-cursus.component';
import { EditDepartementComponent } from './components/edit-departement/edit-departement.component';
import { EditInfoUeComponent } from './components/edit-info-ue/edit-info-ue.component';
import { EditEnseignantComponent } from './components/edit-enseignant/edit-enseignant.component';
import { EditEvaluationComponent } from './components/edit-evaluation/edit-evaluation.component';
import { EditActiviteApprentissageComponent } from './components/edit-activite-apprentissage/edit-activite-apprentissage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    ActiviteApprentissageComponent,
    CapaciteComponent,
    CompetenceComponent,
    CursusComponent,
    DepartementComponent,
    EnseignantComponent,
    EvaluationComponent,
    InfoUeComponent,
    AddInfoUeComponent,
    AddCapaciteComponent,
    AddCompetenceComponent,
    AddCursusComponent,
    AddDepartementComponent,
    AddEnseignantComponent,
    AddEvaluationComponent,
    AddActiviteApprentissageComponent,
    AddUniteEtudeComponent,
    EditCapaciteComponent,
    EditCompetenceComponent,
    EditCursusComponent,
    EditDepartementComponent,
    EditInfoUeComponent,
    EditEnseignantComponent,
    EditEvaluationComponent,
    EditActiviteApprentissageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    InfoUeComponent,
    CapaciteComponent,
    CompetenceComponent,
    CursusComponent,
    EnseignantComponent,
    EvaluationComponent,
    ActiviteApprentissageComponent,
    HomeComponent,
    DepartementComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
