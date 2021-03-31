import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  postagem: Postagem= new Postagem();
  temaList: Tema[];
  idTema: number;
  temaEscolhido: Tema= new Tema();
  user: User= new User();
  idUser= environment.id;


  constructor(
    private router: Router,
     private title: Title, 
     private postagemService: PostagemService, 
     private temaService: TemaService
     ) { }

  ngOnInit(): void {
    this.sair();
    this.title.setTitle("Página Inicial do Blog");
    this.getAllTemas();
  }

  sair(){
    if(environment.token == ''){
      alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);
    }
  }
  
  getAllTemas(){
    this.temaService.getAllTema().subscribe( (resp: Tema[])=>{
      this.temaList= resp;
    })
  }

  findByIdTema(){
    this.temaService.getById(this.idTema).subscribe( (resp: Tema)=>{
      this.temaEscolhido= resp;
    })
  }
  publicar(){
    //preenchendo o usuário 
    this.user.id_usuario = environment.id;
    //preenchendo os campos de postagem 
    this.postagem.usuario= this.user;
    this.postagem.tema= this.temaEscolhido;
    //enviando para o service 
    this.postagemService.postPostagem(this.postagem).subscribe( (resp: Postagem)=>{
      this.postagem= resp;
      alert('Postagem cadastrada com sucesso!')
      this.postagem= new Postagem();
    })
  }
}
