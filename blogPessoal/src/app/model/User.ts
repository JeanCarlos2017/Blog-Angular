import { PostagemService } from "../service/postagem.service";
import { Postagem } from "./Postagem";

export class User{
    public id_usuario: number;
    public email: string;
    public senha: string;
    public nome: string;
    public url_foto: string;
    public codigo_usuario: number;
    public tipo: string;
    public postagensUsuario: Postagem[];
}