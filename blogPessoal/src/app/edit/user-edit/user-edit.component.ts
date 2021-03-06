import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private alertService: AlertasService
  ) { }

  user: User = new User
  confirmarSenha: string;
  tipoUsuario: string;
  idUser: number;

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    if (environment.token === '') {
      this.router.navigate(['/entrar']);
    }
    this.idUser = this.routerActive.snapshot.params['id'];
    this.findByidUser();
  }

  confirmPassword(event: any) {
    this.confirmarSenha = event.target.value;
  }

  setTipoUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar() {
    this.user.tipo = this.tipoUsuario;
    if (this.user.senha == this.confirmarSenha) {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp;

        this.alertService.showAlert('Usuário atualizado com sucesso, faça o login novamente', 'success') 
        //reseta o environment
        environment.token = '';
        environment.nome = '';
        environment.id = 0;
        environment.foto = '';
        environment.codigo_usuario = 0;
        this.router.navigate(['/entrar']);

      }, erro => {
        if (erro.status == 400) {
          this.alertService.showAlert(erro.error.titulo, 'danger') 
          
        }
      });

    } else {
      this.alertService.showAlert('As senhas não correspondem', 'danger') 
    }
  }

  findByidUser() {
    this.authService.getByIdUser(this.idUser, this.token).subscribe((resp: User) => {
      this.user = resp;
    })
  }
}
