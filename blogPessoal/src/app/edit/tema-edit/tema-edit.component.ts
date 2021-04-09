import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {
  tema: Tema= new Tema();
  constructor(private temaService: TemaService, private router: Router, private activatedRoute: ActivatedRoute, 
    private alertService: AlertasService) { }

  ngOnInit(): void {
    if(environment.token == ''){
      this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", 'info') 
      this.router.navigate(['/entrar']);
    }
    let id= this.activatedRoute.snapshot.params['id'];
    this.findByIdTema(id);
  }

  findByIdTema(id: number){
    this.temaService.getById(id).subscribe( (resp: Tema)=>{
      this.tema= resp;
    })
    
  }
  
  atualizarTema(){
    this.temaService.putTema(this.tema).subscribe( (resp: Tema) =>{
      this.tema= resp;
      this.alertService.showAlert("Tema atualizado com sucesso!", 'success') 
      this.router.navigate(['/tema']);
    })
  }

}
