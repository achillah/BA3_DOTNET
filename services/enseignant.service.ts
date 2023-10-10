import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Enseignant } from '../models/enseignant'; // Assurez-vous d'importer le modèle Enseignant
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  private apiUrl = "https://localhost:44331/api/Enseignants"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }

  getEnseignant(id: number): Observable<Enseignant> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Enseignant>(url).pipe(
      catchError(this.handleError)
    );
  }

  addEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.apiUrl}`, enseignant);
  }

  updateEnseignant(enseignant: Enseignant): Observable<void> {
    const url = `${this.apiUrl}/${enseignant.id}`;
    return this.http.put<void>(url, enseignant);
  }
  

  deleteEnseignant(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
