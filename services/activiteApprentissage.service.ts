import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ActiviteApprentissage } from '../models/activiteApprentissage'; // Assurez-vous d'importer le modèle AA
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteApprentissageService {
  private apiUrl = "https://localhost:44331/api/ActiviteApprentissages"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getActiviteApprentissages(): Observable<ActiviteApprentissage[]> {
    return this.http.get<ActiviteApprentissage[]>(this.apiUrl);
  }

  getActiviteApprentissage(id: number): Observable<ActiviteApprentissage> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ActiviteApprentissage>(url).pipe(
      catchError(this.handleError)
    );
  }
  

  addActiviteApprentissage(activiteApprentissage: ActiviteApprentissage): Observable<ActiviteApprentissage> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<ActiviteApprentissage>(this.apiUrl, activiteApprentissage, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateActiviteApprentissage(activiteApprentissage: ActiviteApprentissage): Observable<void> {
    const url = `${this.apiUrl}/${activiteApprentissage.id}`;
    return this.http.put<void>(url, activiteApprentissage);
  }
  

  deleteActiviteApprentissage(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
