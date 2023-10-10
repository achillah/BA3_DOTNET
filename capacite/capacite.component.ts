import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacite } from 'src/app/models/capacite';
import { CapacitesService } from 'src/app/services/capactite.service';

@Component({
  selector: 'app-capacite',
  templateUrl: './capacite.component.html',
  styleUrls: ['./capacite.component.css']
})
export class CapaciteComponent {

  capacites: Capacite[] = [];
  selectedCapacite: Capacite | null = null;


  constructor(private capaciteService: CapacitesService, private router: Router) {}

  ngOnInit() {
    this.getCapacites();
  }

  

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  
  navigateToAddCapacite() {
    this.router.navigateByUrl('/addCapacite');
  }

  navigateToEditCapacite(id: number): void {
    this.router.navigate(['/editCapacite', id]);
  }


  getCapacites() {
    this.capaciteService.getCapacites().subscribe(
      (data: Capacite[]) => {
        this.capacites = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(capacite: Capacite): void {
    this.selectedCapacite = capacite;
  }


  onDelete(capacite: Capacite): void {
    this.capaciteService.deleteCapacite(capacite.id).subscribe(
      () => {
        this.getCapacites();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la capacité:', error);
      }
    );
  }



}
