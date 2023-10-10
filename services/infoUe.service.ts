import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { InfoUe } from '../models/infoUe'; // Assurez-vous d'importer le modèle infoUe
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUesService {
  private apiUrl = "https://localhost:44331/api/InfoUes"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getInfoUes(): Observable<InfoUe[]> {
    return this.http.get<InfoUe[]>(this.apiUrl);
  }

  getInfoUe(id: number): Observable<InfoUe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<InfoUe>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour effectuer la requête POST pour ajouter une nouvelle InfoUe
  addInfoUe(infoUe: InfoUe): Observable<InfoUe> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<InfoUe>(this.apiUrl, infoUe, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateInfoUe(infoUe: InfoUe): Observable<InfoUe> {
    const url = `${this.apiUrl}/${infoUe.id}`;
    return this.http.put<InfoUe>(url, infoUe);
  }
  

  deleteInfoUe(id: number): Observable<InfoUe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<InfoUe>(url);
  }

  // // Gestion des erreurs
   private handleError(error: any) {
     console.error('An error occurred:', error);
     return throwError(error);
   }
}


