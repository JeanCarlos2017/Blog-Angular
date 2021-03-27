import { Component } from '@angular/core';
import { faCoffee, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogPessoal';
  faUserEdit= faUserEdit;
  faCoffee= faCoffee;

  constructor(public authService: AuthService){}
}
