import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteApprentissage } from 'src/app/models/activiteApprentissage';
import { ActiviteApprentissageService } from 'src/app/services/activiteApprentissage.service';
import { ActiviteApprentissageComponent } from '../activite-apprentissage/activite-apprentissage.component';

@Component({
  selector: 'app-add-activite-apprentissage',
  templateUrl: './add-activite-apprentissage.component.html',
  styleUrls: ['./add-activite-apprentissage.component.css']
})
export class AddActiviteApprentissageComponent {

  activiteApprentissage: ActiviteApprentissage[] = [];
  newActiviteApprentissage: ActiviteApprentissage = new ActiviteApprentissage(); 

  constructor(private activiteApprentissageService: ActiviteApprentissageService, private router: Router, private activiteApprentissageComponent: ActiviteApprentissageComponent) {}

  ngOnInit(): void {
    this.activiteApprentissageComponent.getActiviteApprentissage();
  }

  navigateToActiviteApprentissage() {
    this.router.navigateByUrl('/activiteApprentissage');
  }

  

  onSubmit(): void {
    this.addActiviteApprentissage(this.newActiviteApprentissage);
  }

  addActiviteApprentissage(activiteApprentissage: ActiviteApprentissage): void {
    this.activiteApprentissageService.addActiviteApprentissage(activiteApprentissage)
      .subscribe(
        (newActiviteApprentissage) => {
          console.log('Activite Apprentissage ajoutée:', newActiviteApprentissage);
          this.newActiviteApprentissage = new ActiviteApprentissage();
          this.activiteApprentissageComponent.getActiviteApprentissage();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'activite d\'apprentissage:', error);
        }
      );
      this.router.navigate(['/activiteApprentissage']);
  }

}
