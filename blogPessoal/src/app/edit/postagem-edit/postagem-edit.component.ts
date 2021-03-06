import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem= new Postagem();
  tema: Tema= new Tema();
  temaList: Tema[];
  idTema: number;

  constructor(
    private router: Router,
    private routerActived: ActivatedRoute,
    private postagemService: PostagemService, 
    private temaService: TemaService,
    private title: Title,
    private alertService: AlertasService
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Edição de Postagem do Blog");
    window.scroll(0,0);
    if(environment.token == ''){
      this.router.navigate(['/entrar']);
    }

    let id= this.routerActived.snapshot.params['id'];
    this.findByIdPostagem(id);
    this.findAllTemas();
  }

  findByIdPostagem(id: number){
    this.postagemService.getById(id).subscribe( (resp: Postagem)=>{
      this.postagem= resp;

    })
  }

  atualizar(){
    //atualizo o tema da postagem
    this.tema.id= this.idTema;
    this.postagem.tema= this.tema;
    //chmando o service 

    this.postagemService.putPostagem(this.postagem).subscribe( (resp: Postagem)=>{
      this.postagem= resp;
      this.alertService.showAlert('Postagem atualizada  com sucesso!', 'success') 
      this.router.navigate(['/inicio']);
    })

  }

  findByIdTema(){
    this.temaService.getById(this.idTema).subscribe( (resp: Tema)=>{
      this.tema= resp;
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe( (resp: Tema[])=>{
      this.temaList= resp;
    })
  }
}
