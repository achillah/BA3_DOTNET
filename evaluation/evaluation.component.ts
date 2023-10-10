import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluation } from 'src/app/models/evaluation';
import { EvaluationsService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {

  evaluations: Evaluation[] = [];
  selectedEvaluation: Evaluation | null = null;


  constructor(private evaluationsService: EvaluationsService, private router: Router) {}

  ngOnInit() {
    this.getEvaluations();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToAddEvaluation() {
    this.router.navigateByUrl('/addEvaluation');
  }

  navigateToEditEvaluation(id: number): void {
    this.router.navigate(['/editEvaluation', id]);
  }
  

  getEvaluations() {
    this.evaluationsService.getEvaluations().subscribe(
      (data: Evaluation[]) => {
        this.evaluations = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(evaluation: Evaluation): void {
    this.selectedEvaluation = evaluation;
  }


  onDelete(evaluation: Evaluation): void {
    this.evaluationsService.deleteEvaluation(evaluation.id).subscribe(
      () => {
        this.getEvaluations();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'evaluation:', error);
      }
    );
  }
}
