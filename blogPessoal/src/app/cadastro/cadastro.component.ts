import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User= new User
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(private authService: AuthService, private router: Router, private title: Title,
    private alertService: AlertasService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.title.setTitle("Cadastre-se no Blog");
  }

  confirmPassword(event: any){
      this.confirmarSenha= event.target.value;  
  }

  setTipoUsuario(event: any){
    this.tipoUsuario= event.target.value; 
  }

  cadastrar(){
      this.user.tipo= this.tipoUsuario;
      if(this.user.senha == this.confirmarSenha){
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user= resp;
          this.router.navigate(['/entrar']);
          this.alertService.showAlert('usuario cadastrado  com sucesso!', 'success') 
          
          
        });

      }else{
        this.alertService.showAlert('senhas não correspondem!', 'danger')
      }
  }
}
