import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteApprentissage } from 'src/app/models/activiteApprentissage';
import { ActiviteApprentissageService } from 'src/app/services/activiteApprentissage.service';

@Component({
  selector: 'app-activite-apprentissage',
  templateUrl: './activite-apprentissage.component.html',
  styleUrls: ['./activite-apprentissage.component.css']
})
export class ActiviteApprentissageComponent {
  
  activiteApprentissages: ActiviteApprentissage[] = [];
  selectedActiviteApprentissage: ActiviteApprentissage | null = null;


  constructor(private router: Router, private activiteApprentissageService: ActiviteApprentissageService) {}

  ngOnInit() {
    this.getActiviteApprentissage();
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToAddActiviteApprentissage() {
    this.router.navigateByUrl('/addActiviteApprentissage');
  }

  navigateToEditActiviteApprentissage(id: number): void {
    this.router.navigate(['/editActiviteApprentissage', id]);
  }

  
  getActiviteApprentissage() {
    this.activiteApprentissageService.getActiviteApprentissages().subscribe(
      (data: ActiviteApprentissage[]) => {
        this.activiteApprentissages = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(activiteApprentissage: ActiviteApprentissage): void {
    this.selectedActiviteApprentissage = activiteApprentissage;
  }


  onDelete(activiteApprentissage: ActiviteApprentissage): void {
    this.activiteApprentissageService.deleteActiviteApprentissage(activiteApprentissage.id).subscribe(
      () => {
        this.getActiviteApprentissage();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'activite d\'apprentissage:', error);
      }
    );
  }
}
