import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementsService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent {

  
  departement: Departement = new Departement(); 

  constructor(private departementsService: DepartementsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID récupéré:', id);

    this.getDepartementById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateDepartement();
  }

  getDepartementById(id: number): void {

    this.departementsService.getDepartement(id).subscribe(
      (departement) => {
        this.departement = departement;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération du departement par ID:', error);
      }
    );
  }

  updateDepartement(): void {
    this.departementsService.updateDepartement(this.departement).subscribe(
      () => {
        this.router.navigateByUrl('/departement');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du departement:', error);
      }
    );
  }

}
