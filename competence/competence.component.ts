import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Competence } from 'src/app/models/competences';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {

  competences: Competence[] = [];
  selectedCompetence: Competence | null = null;

  constructor(private competenceService: CompetenceService, private router: Router) {}

  ngOnInit() {
    this.getCompetences();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToAddCompetence() {
    this.router.navigateByUrl('/addCompetence');
  }

  navigateToEditCompetence(id: number): void {
    this.router.navigate(['/editCompetence', id]);
  }

  getCompetences() {
    this.competenceService.getCompetences().subscribe(
      (data: Competence[]) => {
        this.competences = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
  }


  onDelete(competence: Competence): void {
    this.competenceService.deleteCompetence(competence.id).subscribe(
      () => {
        this.getCompetences();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la competence:', error);
      }
    );
  }
}
