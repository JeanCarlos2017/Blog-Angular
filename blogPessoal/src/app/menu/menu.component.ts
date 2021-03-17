import { Component, OnInit } from '@angular/core';
import { faUserEdit, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faUserEdit= faUserEdit;
  faSignOutAlt= faSignOutAlt;
  faUserCog= faUserCog;
  constructor() { }

  ngOnInit(): void {
  }

}
