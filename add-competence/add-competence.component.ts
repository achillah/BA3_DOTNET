import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Competence } from 'src/app/models/competences';
import { CompetenceService } from 'src/app/services/competence.service';
import { CompetenceComponent } from '../competence/competence.component';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent {

  competences: Competence[] = [];
  newCompetence: Competence = new Competence(); 

  constructor(private competenceService: CompetenceService, private router: Router, private competenceComponent: CompetenceComponent) {}

  ngOnInit(): void {
    this.competenceComponent.getCompetences();
  }

  navigateToCompetence() {
    this.router.navigateByUrl('/competence');
  }

  

  onSubmit(): void {
    this.addCompetence(this.newCompetence);
  }

  addCompetence(competence: Competence): void {
    this.competenceService.addCompetence(competence)
      .subscribe(
        (newCompetence) => {
          console.log('Competence ajoutée:', newCompetence);
          this.newCompetence = new Competence();
          this.competenceComponent.getCompetences();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'InfoUe:', error);
        }
      );
      this.router.navigate(['/competence']);

  }

}
