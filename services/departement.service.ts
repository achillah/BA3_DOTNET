import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Departement } from '../models/departement'; // Assurez-vous d'importer le modèle departement
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {
  private apiUrl = "https://localhost:44331/api/Departements"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.apiUrl);
  }

  getDepartement(id: number): Observable<Departement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Departement>(url).pipe(
      catchError(this.handleError)
    );
  }

  addDepartement(departement: Departement): Observable<Departement> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Departement>(this.apiUrl, departement, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDepartement(departement: Departement): Observable<Departement> {
    const url = `${this.apiUrl}/${departement.id}`;
    return this.http.put<Departement>(url, departement);
  }
  

  deleteDepartement(id: number): Observable<Departement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Departement>(url);
  }
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
