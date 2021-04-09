import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  constructor(private httpClient: HttpClient) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.httpClient.get<Postagem[]>('http://localhost:8080/postagem', this.token);
  }

  getAllByTituloContaining(titulo: string): Observable<Postagem[]>{
    return this.httpClient.get<Postagem[]>(`http://localhost:8080/postagem/titulo/${titulo}`, this.token);
  }

  postPostagem(post: Postagem): Observable<Postagem>{
    return this.httpClient.post<Postagem>('http://localhost:8080/postagem', post, this.token);
  }

  getById(id: number): Observable<Postagem>{
    return this.httpClient.get<Postagem>(`http://localhost:8080/postagem/${id}`, this.token);
  }

  putPostagem(post: Postagem): Observable<Postagem>{
    return this.httpClient.put<Postagem>(`http://localhost:8080/postagem/${post.id}`, post, this.token);
  }

  deletePostagem(id: number): Observable<Postagem>{
    return this.httpClient.delete<Postagem>(`http://localhost:8080/postagem/${id}`, this.token);
  }
}
