import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy }  from '@angular/common'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy, 
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
