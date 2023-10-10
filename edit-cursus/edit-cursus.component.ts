import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursus } from 'src/app/models/cursus';
import { CursusService } from 'src/app/services/cursus.service';

@Component({
  selector: 'app-edit-cursus',
  templateUrl: './edit-cursus.component.html',
  styleUrls: ['./edit-cursus.component.css']
})
export class EditCursusComponent {

  
  
  cursus: Cursus = new Cursus(); 

  constructor(private cursusService: CursusService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID récupéré:', id);

    this.getCursusById(id);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit(): void {
    this.updateCursus();
  }

  getCursusById(id: number): void {
    this.cursusService.getCursusById(id).subscribe(
      (cursus) => {
        this.cursus = cursus;
      },
      (error) => {
        console.log(error); 
        console.error('Erreur lors de la récupération du cursus par ID:', error);
      }
    );
  }

  updateCursus(): void {
    this.cursusService.updateCursus(this.cursus).subscribe(
      () => {
        this.router.navigateByUrl('/cursus');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du cursus:', error);
      }
    );
  }


}
