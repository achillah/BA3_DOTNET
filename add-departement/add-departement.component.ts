import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementsService } from 'src/app/services/departement.service';
import { DepartementComponent } from '../departement/departement.component';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent {

  departements: Departement[] = [];
  newDepartement: Departement = new Departement(); 

  constructor(private departementsService: DepartementsService, private router: Router, private departementComponent: DepartementComponent) {}

  ngOnInit(): void {
    this.departementComponent.getDepartements();
  }

  navigateToDepartement() {
    this.router.navigateByUrl('/departement');
  }

  

  onSubmit(): void {
    this.addDepartement(this.newDepartement);
  }

  addDepartement(departement: Departement): void {
    this.departementsService.addDepartement(departement)
      .subscribe(
        (newDepartement) => {
          console.log('Departement ajoutée:', newDepartement);
          this.newDepartement = new Departement();
          this.departementComponent.getDepartements();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du departement:', error);
        }
      );
      this.router.navigate(['/departement']);

  }

}
