import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem= new Postagem();
  idPost: number;
  tema: Tema= new Tema();
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

    this.idPost= this.routerActived.snapshot.params['id'];
    this.findByIdPostagem();
  }

  findByIdPostagem(){
    this.postagemService.getById(this.idPost).subscribe( (resp: Postagem)=>{
      this.postagem= resp;

    })
  }


  findByIdTema(){
    this.temaService.getById(this.idTema).subscribe( (resp: Tema)=>{
      this.tema= resp;
    })
  }

 apagar(){
   this.postagemService.deletePostagem(this.idPost).subscribe( ()=>{
     this.alertService.showAlert("Postagem deletada com sucesso! ", 'success') 
     this.router.navigate(['/inicio']);
   })
 }

}
