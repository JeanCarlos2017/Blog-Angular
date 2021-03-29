import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(private router: Router, private title: Title ) { }

  ngOnInit() {
    this.title.setTitle("Página de Temas do Blog");
    if(environment.token == ''){
      //alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);
    }
  }

}
