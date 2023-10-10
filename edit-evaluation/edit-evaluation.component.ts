import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from 'src/app/models/evaluation';
import { EvaluationsService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-edit-evaluation',
  templateUrl: './edit-evaluation.component.html',
  styleUrls: ['./edit-evaluation.component.css']
})
export class EditEvaluationComponent {

  evaluation: Evaluation = new Evaluation();

  constructor(private evaluationsService: EvaluationsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getEvaluationById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateEvaluation();
  }

  getEvaluationById(id: number): void {

    this.evaluationsService.getEvaluation(id).subscribe(
      (evaluation) => {
        this.evaluation = evaluation;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération de l\'evaluation par ID:', error);
      }
    );
  }

  updateEvaluation(): void {
    this.evaluationsService.updateEvaluation(this.evaluation).subscribe(
      () => {
        this.router.navigateByUrl('/evaluation');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'evaluation:', error);
      }
    );
  }

}
