import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoUe } from 'src/app/models/infoUe';
import { InfoUesService } from 'src/app/services/infoUe.service';

@Component({
  selector: 'app-edit-info-ue',
  templateUrl: './edit-info-ue.component.html',
  styleUrls: ['./edit-info-ue.component.css']
})
export class EditInfoUeComponent {

  
  infoUe: InfoUe = new InfoUe(); 

  constructor(private infoUesService: InfoUesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID récupéré:', id);

    this.getInfoUeById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateInfoUe();
  }

  getInfoUeById(id: number): void {

    this.infoUesService.getInfoUe(id).subscribe(
      (infoUe) => {
        this.infoUe = infoUe;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération des info Ue par ID:', error);
      }
    );
  }

  updateInfoUe(): void {
    this.infoUesService.updateInfoUe(this.infoUe).subscribe(
      () => {
        this.router.navigateByUrl('/infoUe');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour des info UE:', error);
      }
    );
  }

}
