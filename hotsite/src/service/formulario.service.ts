import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Lead {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private apiUrl = 'http://localhost:8080/api/leads'; 

  constructor(private http: HttpClient) {}

  enviarLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.apiUrl, lead);
  }
}
