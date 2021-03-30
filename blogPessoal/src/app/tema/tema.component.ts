import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema= new Tema();
  listaTemas: Tema[];

  constructor(private router: Router, private title: Title, private temaService: TemaService ) { }

  ngOnInit() {
    this.title.setTitle("Página de Temas do Blog");
    if(environment.token == ''){
      //alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);
    }

    this.findAllTema();
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema= resp;
      alert("Tema cadastrado com sucesso! ");
      this.tema= new Tema();
      this.findAllTema(); //atualizo a lista de temas 
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas= resp;
    })
  }
}
