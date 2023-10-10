import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluation } from 'src/app/models/evaluation';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { EvaluationsService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent {

  evaluations: Evaluation[] = [];
  newEvaluation: Evaluation = new Evaluation(); 

  constructor(private evaluationService: EvaluationsService, private router: Router, private evaluationComponent: EvaluationComponent) {}

  ngOnInit(): void {
    this.evaluationComponent.getEvaluations();
  }

  navigateToEvaluation() {
    this.router.navigateByUrl('/evaluation');
  }

  

  onSubmit(): void {
    this.addEvaluation(this.newEvaluation);
  }

  addEvaluation(evaluation: Evaluation): void {
    this.evaluationService.addEvaluation(evaluation)
      .subscribe(
        (newEvaluation) => {
          console.log('Evaluation ajoutée:', newEvaluation);
          this.newEvaluation = new Evaluation();
          this.evaluationComponent.getEvaluations();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'Evaluation:', error);
        }
      );
      this.router.navigate(['/evaluation']);

  }

}
