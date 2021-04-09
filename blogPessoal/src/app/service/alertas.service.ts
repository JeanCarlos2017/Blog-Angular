import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService,
  ) { }


  private createAlert(message: string, type: string){
    const bsModalRef: BsModalRef= this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type= type;
    bsModalRef.content.message= message;
  }

  showAlert(message: string, type: string){
    this.createAlert(message, type);
  }
}
