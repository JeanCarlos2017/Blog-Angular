import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.sair();
    this.title.setTitle("Página Inicial do Blog");
  }

  sair(){
    if(environment.token == ''){
      alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);
    }
  }
}
