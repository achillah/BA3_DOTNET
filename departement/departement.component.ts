import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementsService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent {

  departements: Departement[] = [];
  selectedDepartement: Departement | null = null;

  constructor(private departementsService: DepartementsService, private router: Router) {}

  ngOnInit() {
    this.getDepartements();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  
  navigateToAddDepartement() {
    this.router.navigateByUrl('/addDepartement');
  }

  navigateToEditDepartement(id: number): void {
    this.router.navigate(['/editDepartement', id]);
  }


  getDepartements() {
    this.departementsService.getDepartements().subscribe(
      (data: Departement[]) => {
        this.departements = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  onSelect(departement: Departement): void {
    this.selectedDepartement = departement;
  }


  onDelete(departement: Departement): void {
    this.departementsService.deleteDepartement(departement.id).subscribe(
      () => {
        this.getDepartements();
      },
      (error) => {
        console.error('Erreur lors de la suppression du departement:', error);
      }
    );
  }

}
