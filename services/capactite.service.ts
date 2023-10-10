import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Capacite } from '../models/capacite'; // Assurez-vous d'importer le modèle capacite
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapacitesService {
  private apiUrl = "https://localhost:44331/api/Capacites"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getCapacites(): Observable<Capacite[]> {
    return this.http.get<Capacite[]>(this.apiUrl);
  }

  getCapacite(id: number): Observable<Capacite> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Capacite>(url).pipe(
      catchError(this.handleError)
    );
  }
  
  

  addCapacite(capacite: Capacite): Observable<Capacite> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Capacite>(this.apiUrl, capacite, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCapacite(capacite: Capacite): Observable<void> {
    const url = `${this.apiUrl}/${capacite.id}`;
    return this.http.put<void>(url, capacite);
  }
  

  deleteCapacite(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
