import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
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
  postagemList: Postagem[];

  //ordenação 
  key='data';
  reverse= true;

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  constructor(
    private router: Router,
     private title: Title, 
     private postagemService: PostagemService, 
     private temaService: TemaService, 
     private authService: AuthService,
     private alertService: AlertasService
     ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.sair();
    this.title.setTitle("Página Inicial do Blog");
    this.getAllTemas();
    this.getAllPostagens();

  }

  sair(){
    if(environment.token == ''){
      this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
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
     this.alertService.showAlert('Postagem cadastrada com sucesso!', 'success');
      this.postagem= new Postagem();

      //atualiz a lista de postagens 
      this.getAllPostagens();

      //atualiza o usuário 
      this.findByIdUser();
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe( (resp: Postagem[])=>{
      this.postagemList= resp;
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser, this.token).subscribe( (resp: User)=>{
        this.user= resp;
    })
  }


  
}
