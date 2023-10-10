import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteApprentissage } from 'src/app/models/activiteApprentissage';
import { Enseignant } from 'src/app/models/enseignant';
import { ActiviteApprentissageService } from 'src/app/services/activiteApprentissage.service';
import { EnseignantsService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent {

  
  enseignant: Enseignant = new Enseignant(); 
  activiteApprentissages: ActiviteApprentissage[] = []; 
  selectedActiviteId: number | null = null;


  constructor(private enseignantsService: EnseignantsService, private activiteApprentissageService: ActiviteApprentissageService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEnseignantById(id);
    this.getActiviteApprentissages();
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    if (this.selectedActiviteId !== null) {
      const selectedActivite = this.activiteApprentissages.find(aa => aa.id === this.selectedActiviteId);
      if (selectedActivite) {
        this.enseignant.listActiviteApprentissages = [selectedActivite];
      }
    }

    this.updateEnseignant();
  }

  getEnseignantById(id: number): void {
    this.enseignantsService.getEnseignant(id).subscribe(
      (enseignant) => {
        this.enseignant = enseignant;
        if (this.enseignant.listActiviteApprentissages) {
          this.selectedActiviteId = this.enseignant.listActiviteApprentissages[0]?.id || null;
        }
      },
      (error) => {
        console.log(error);
        console.error('Erreur lors de la récupération de l\'enseignant par ID:', error);
      }
    );
  }

  getActiviteApprentissages(): void {
    this.activiteApprentissageService.getActiviteApprentissages().subscribe(
      (activiteApprentissages) => {
        this.activiteApprentissages = activiteApprentissages;
      },
      (error) => {
        console.error('Erreur lors de la récupération des activités d\'apprentissage:', error);
      }
    );
  }

  updateEnseignant(): void {
    this.enseignantsService.updateEnseignant(this.enseignant).subscribe(updatedEnseignant => {
      console.log('Enseignant mis à jour:', updatedEnseignant);
      // Redirige vers la page des enseignants (à adapter)
    });
  }

}
