import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private httpClient: HttpClient) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
     return this.httpClient.get<Tema[]>('http://localhost:8080/tema', this.token);
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.httpClient.post<Tema>('http://localhost:8080/tema', tema, this.token);
  }
}
