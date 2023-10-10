import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUe } from 'src/app/models/infoUe';
import { InfoUesService } from 'src/app/services/infoUe.service';
import { InfoUeComponent } from '../info-ue/info-ue.component';


@Component({
  selector: 'app-add-info-ue',
  templateUrl: './add-info-ue.component.html',
  styleUrls: ['./add-info-ue.component.css']
})
export class AddInfoUeComponent {

  infoUes: InfoUe[] = [];
  newInfoUe: InfoUe = new InfoUe(); 

  constructor(private infoUeService: InfoUesService, private router: Router, private infoUe: InfoUeComponent) {}

  ngOnInit(): void {
    this.infoUe.getInfoUes();
  }

  navigateToInfoUe() {
    this.router.navigateByUrl('/infoUe');
  }

  onSubmit(): void {
    this.addInfoUe(this.newInfoUe);
  }

  addInfoUe(infoUe: InfoUe): void {
    this.infoUeService.addInfoUe(infoUe)
      .subscribe(
        (newInfoUe) => {
          console.log('InfoUe ajoutée:', newInfoUe);
          this.newInfoUe = new InfoUe();
          this.infoUe.getInfoUes();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'InfoUe:', error);
        }
      );
      this.router.navigate(['/infoUe']);

  }

}
