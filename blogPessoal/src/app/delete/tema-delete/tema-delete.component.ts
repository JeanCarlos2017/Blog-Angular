import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {
  tema: Tema= new Tema();
  idTema: number;
  constructor(private temaService: TemaService, private router: Router, private activatedRoute: ActivatedRoute,
    private alertService: AlertasService) { }

  ngOnInit(): void {
    if(environment.token == ''){
      alert("Sua seção foi encerrada, faça o login novamente");
      this.router.navigate(['/entrar']);
    }
    this.idTema= this.activatedRoute.snapshot.params['id'];
    this.findByIdTema();
  }
  
  findByIdTema(){
    this.temaService.getById(this.idTema).subscribe( (resp: Tema)=>{
      this.tema= resp;
    })
    
  }

  apagarTema(){
    this.temaService.deleteTema(this.idTema).subscribe( () =>{
      this.alertService.showAlert('tema deletado com sucesso  com sucesso!', 'success') 
      this.router.navigate(['/tema']);
    })
  }
}
