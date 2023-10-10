// unite-etudes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UniteEtude } from '../models/uniteEtude'; // Assurez-vous d'importer le modèle UniteEtude

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = "https://localhost:44331/api/UniteEtudes"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) { }

  generateDocument(params: any): Observable<Blob> {
    const url = `${this.apiUrl}/GenerateDocument`;
    return this.http.get(url, { responseType: 'blob', params });
  }
  // getUniteEtudes(): Observable<UniteEtude[]> {
  //   return this.http.get<UniteEtude[]>(this.apiUrl);
  // }

  // addUiteEtude(uniteEtude: UniteEtude): Observable<UniteEtude> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };

  //   return this.http.post<UniteEtude>(this.apiUrl, uniteEtude, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
        
  //     );
  // }
  
  // // // Gestion des erreurs
  // private handleError(error: any) {
  //   console.error('An error occurred:', error);
  //   return throwError(error);
  // }

}
