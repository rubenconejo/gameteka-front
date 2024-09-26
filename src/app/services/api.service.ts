import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  getGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/juegos`);
  }

  getLibrary(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/biblioteca/${userId}`);
  }
}
