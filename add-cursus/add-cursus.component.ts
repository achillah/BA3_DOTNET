import { Component } from '@angular/core';
import { Cursus } from 'src/app/models/cursus';
import { CursusService } from 'src/app/services/cursus.service';
import { CursusComponent } from '../cursus/cursus.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cursus',
  templateUrl: './add-cursus.component.html',
  styleUrls: ['./add-cursus.component.css']
})
export class AddCursusComponent {

  cursus: Cursus[] = [];
  newCursus: Cursus = new Cursus(); 

  constructor(private cursusService: CursusService, private router: Router, private cursusComponent: CursusComponent) {}

  ngOnInit(): void {
    this.cursusComponent.getCursus();
  }

  navigateToCursus() {
    this.router.navigateByUrl('/cursus');
  }

  

  onSubmit(): void {
    this.addCursus(this.newCursus);
  }

  addCursus(cursus: Cursus): void {
    this.cursusService.addCursus(cursus)
      .subscribe(
        (newCursus) => {
          console.log('Cursus ajoutée:', newCursus);
          this.newCursus = new Cursus();
          this.cursusComponent.getCursus();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'InfoUe:', error);
        }
      );
      this.router.navigate(['/cursus']);

  }


}
