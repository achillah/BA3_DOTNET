import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cursus } from 'src/app/models/cursus';
import { CursusService } from 'src/app/services/cursus.service';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.css']
})
export class CursusComponent {


  cursus: Cursus[] = [];
  selectedCursus: Cursus | null = null;

  constructor(private cursusService: CursusService, private router: Router) {}

  ngOnInit() {
    this.getCursus();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  
  navigateToAddCursus() {
    this.router.navigateByUrl('/addCursus');
  }

  navigateToEditCursus(id: number): void {
    this.router.navigate(['/editCursus', id]);
  }

  getCursus() {
    this.cursusService.getCursus().subscribe(
      (data: Cursus[]) => {
        this.cursus = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(cursus: Cursus): void {
    this.selectedCursus = cursus;
  }


  onDelete(cursus: Cursus): void {
    this.cursusService.deleteCursus(cursus.id).subscribe(
      () => {
        this.getCursus();
      },
      (error) => {
        console.error('Erreur lors de la suppression du cursus:', error);
      }
    );
  }

}
