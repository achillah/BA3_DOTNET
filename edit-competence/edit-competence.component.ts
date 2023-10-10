import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/app/models/competences';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent {

  competence: Competence = new Competence(); 

  constructor(private competenceService: CompetenceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID récupéré:', id);

    this.getCompetenceById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateCompetence();
  }

  getCompetenceById(id: number): void {
    console.log(id);

    this.competenceService.getCompetence(id).subscribe(
      (competence) => {
        this.competence = competence;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération de la competence par ID:', error);
      }
    );
  }

  updateCompetence(): void {
    this.competenceService.updateCompetence(this.competence).subscribe(
      () => {
        this.router.navigateByUrl('/competence');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la competence:', error);
      }
    );
  }

}
