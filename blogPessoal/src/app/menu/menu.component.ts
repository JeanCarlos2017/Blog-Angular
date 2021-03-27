import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserEdit, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faUserEdit= faUserEdit;
  faSignOutAlt= faSignOutAlt;
  faUserCog= faUserCog;

  //enviroment 
  nome: string= environment.nome;
  foto: string= environment.foto;
  codigo_usuario: number= environment.codigo_usuario;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.foto)
  }

  sair(){
    if(environment.token == ''){
      // alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);

      //reseta o environment
      environment.token= '';
      environment.nome= '';
      environment.id= 0;
      environment.foto= '';
      environment.codigo_usuario= 0;

    }
  }
}
