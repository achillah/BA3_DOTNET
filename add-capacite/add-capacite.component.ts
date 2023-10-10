import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacite } from 'src/app/models/capacite';
import { CapacitesService } from 'src/app/services/capactite.service';
import { CapaciteComponent } from '../capacite/capacite.component';

@Component({
  selector: 'app-add-capacite',
  templateUrl: './add-capacite.component.html',
  styleUrls: ['./add-capacite.component.css']
})
export class AddCapaciteComponent {

   capacites: Capacite[] = [];
  newCapacite: Capacite = new Capacite(); 
  constructor(private capacitesService: CapacitesService, private router: Router, private capaciteComponent: CapaciteComponent) {}

  ngOnInit(): void {
    this.capaciteComponent.getCapacites();
  }

  navigateToCapacite() {
    this.router.navigateByUrl('/capacite');
  }

  

  onSubmit(): void {
    this.addCapacite(this.newCapacite);
  }

  addCapacite(capacite: Capacite): void {
    this.capacitesService.addCapacite(capacite)
      .subscribe(
        (newCapacite) => {
          console.log('Capacite ajoutée:', newCapacite);
          this.newCapacite = new Capacite();
          this.capaciteComponent.getCapacites();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'InfoUe:', error);
        }
      );
      this.router.navigate(['/capacite']);
  }

}
