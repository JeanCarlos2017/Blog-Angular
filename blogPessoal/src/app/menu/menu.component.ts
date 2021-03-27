import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    console.log(this.foto)
  }

}
