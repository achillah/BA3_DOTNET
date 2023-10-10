import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/models/enseignant';
import { EnseignantsService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {

  enseignants: Enseignant[] = [];
  selectedEnseignant: Enseignant | null = null;


  constructor(private enseignantsService: EnseignantsService, private router: Router) {}

  ngOnInit() {
    this.getEnseignants();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  
  navigateToAddEnseignant() {
    this.router.navigateByUrl('/addEnseignant');
  }

  navigateToEditEnseignant(id: number): void {
    this.router.navigate(['/editEnseignant', id]);
  }

  getEnseignants() {
    this.enseignantsService.getEnseignants().subscribe(
      (data: Enseignant[]) => {
        this.enseignants = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(enseignant: Enseignant): void {
    this.selectedEnseignant = enseignant;
  }


  onDelete(enseignant: Enseignant): void {
    this.enseignantsService.deleteEnseignant(enseignant.id).subscribe(
      () => {
        this.getEnseignants();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'enseignant:', error);
      }
    );
  }

}
