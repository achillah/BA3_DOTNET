import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacite } from 'src/app/models/capacite';
import { CapacitesService } from 'src/app/services/capactite.service';

@Component({
  selector: 'app-edit-capacite',
  templateUrl: './edit-capacite.component.html',
  styleUrls: ['./edit-capacite.component.css']
})
export class EditCapaciteComponent {

  
  capacite: Capacite = new Capacite();

  constructor(private capaciteService: CapacitesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID récupéré:', id);

    this.getCapaciteById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateCapacite();
  }

  getCapaciteById(id: number): void {

    this.capaciteService.getCapacite(id).subscribe(
      (capacite) => {
        this.capacite = capacite;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération de la capacité par ID:', error);
      }
    );
  }

  updateCapacite(): void {
    this.capaciteService.updateCapacite(this.capacite).subscribe(
      () => {
        this.router.navigateByUrl('/capacite');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la capacité:', error);
      }
    );
  }


}
