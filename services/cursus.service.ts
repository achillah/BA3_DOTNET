import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Cursus } from '../models/cursus'; // Assurez-vous d'importer le modèle cursus
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursusService {
  private apiUrl = "https://localhost:44331/api/Cursus"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getCursus(): Observable<Cursus[]> {
    return this.http.get<Cursus[]>(this.apiUrl);
  }

  getCursusById(id: number): Observable<Cursus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cursus>(url).pipe(
      catchError(this.handleError)
    );
  }

  addCursus(cursus: Cursus): Observable<Cursus> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Cursus>(this.apiUrl, cursus, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCursus(cursus: Cursus): Observable<Cursus> {
    const url = `${this.apiUrl}/${cursus.id}`;
    return this.http.put<Cursus>(url, cursus);
  }
  

  deleteCursus(id: number): Observable<Cursus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cursus>(url);
  }
  
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
