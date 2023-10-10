import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Competence } from '../models/competences'; // Assurez-vous d'importer le modèle Competence
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private apiUrl = "https://localhost:44331/api/Competences"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getCompetences(): Observable<Competence[]> { 
    return this.http.get<Competence[]>(this.apiUrl);
  }

  getCompetence(id: number): Observable<Competence> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Competence>(url).pipe(
      catchError(this.handleError)
    );
  }

  addCompetence(competence: Competence): Observable<Competence> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Competence>(this.apiUrl, competence, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCompetence(competence: Competence): Observable<void> {
    const url = `${this.apiUrl}/${competence.id}`;
    return this.http.put<void>(url, competence);
  }
  

  deleteCompetence(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
