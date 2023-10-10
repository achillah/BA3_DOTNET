import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/models/enseignant';
import { ActiviteApprentissage } from 'src/app/models/activiteApprentissage';
import { EnseignantsService } from 'src/app/services/enseignant.service';
import { ActiviteApprentissageService } from 'src/app/services/activiteApprentissage.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  duplicateActiviteError = false;
  duplicateActiviteErrorMessage = "Certaines activités sont déjà sélectionnées par d'autres enseignants.";

  selectedActivites: ActiviteApprentissage[] = [];
  newEnseignant: Enseignant = new Enseignant();
  activiteApprentissages: ActiviteApprentissage[] = [];

  constructor(
    private enseignantService: EnseignantsService,
    private activiteApprentissageService: ActiviteApprentissageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getActiviteApprentissages();
  }

  onSubmit(): void {
    this.addEnseignant();
  }

  navigateToEnseignant() {
    this.router.navigateByUrl('/enseignant');
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

  

  addEnseignant(): void {
    const alreadySelected = this.activiteApprentissages.some(
      activite => this.selectedActivites.some(selected => selected.id === activite.id)
    );
  
    if (alreadySelected) {
      this.duplicateActiviteError = true;
      return;
    }

    const Enseignantnew: Enseignant = {
      id: this.newEnseignant.id,
      lastname: this.newEnseignant.lastname,
      firstname: this.newEnseignant.firstname,
      email: this.newEnseignant.email,
      listActiviteApprentissages: this.selectedActivites
    };

    this.enseignantService.addEnseignant(Enseignantnew).subscribe(response => {
      console.log('Enseignant added:', response);
      this.router.navigate(['/enseignant']); 
    });
  }
}
