import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUe } from 'src/app/models/infoUe';
import { InfoUesService } from 'src/app/services/infoUe.service';

@Component({
  selector: 'app-info-ue',
  templateUrl: './info-ue.component.html',
  styleUrls: ['./info-ue.component.css']
})
export class InfoUeComponent {

  infoUes: InfoUe[] = [];
  newInfoUe: InfoUe = new InfoUe(); 
  selectedInfoUe: InfoUe | null = null;


  constructor(private infoUesService: InfoUesService, private router: Router) {}

  ngOnInit() {
    this.getInfoUes();
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

 navigateToAddInfoUe(){
  this.router.navigateByUrl('/addInfoUe');
 }

 navigateToEditInfoUe(id: number): void {
  this.router.navigate(['/editInfoUe', id]);
}


  getInfoUes() {
    this.infoUesService.getInfoUes().subscribe(
      (data: InfoUe[]) => {
        this.infoUes = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSelect(infoUe: InfoUe): void {
    this.selectedInfoUe = infoUe;
  }


  onDelete(infoUe: InfoUe): void {
    this.infoUesService.deleteInfoUe(infoUe.id).subscribe(
      () => {
        this.getInfoUes();
      },
      (error) => {
        console.error('Erreur lors des info ue:', error);
      }
    );
  }
}
