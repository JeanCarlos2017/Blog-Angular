import { Postagem } from "./Postagem";

export class UserLogin{
    public id: number;
    public email: string;
    public senha: string;
    public token: string;
    public nome: string;
    public url_foto: string;
    public codigo_usuario: number;
    public tipo: string;
    public postagensUsuario: Postagem[];
}   