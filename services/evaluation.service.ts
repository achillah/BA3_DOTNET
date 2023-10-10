import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Evaluation } from '../models/evaluation'; // Assurez-vous d'importer le modèle evaluation
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {
  private apiUrl = "https://localhost:44331/api/Evaluations"; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) {}

  getEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.apiUrl);
  }

  getEvaluation(id: number): Observable<Evaluation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Evaluation>(url).pipe(
      catchError(this.handleError)
    );
  }

  addEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Evaluation>(this.apiUrl, evaluation, httpOptions)
      .pipe(
        catchError(this.handleError)
        
      );
  }
  
  updateEvaluation(evaluation: Evaluation): Observable<void> {
    const url = `${this.apiUrl}/${evaluation.id}`;
    return this.http.put<void>(url, evaluation);
  }
  

  deleteEvaluation(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  // // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

}
