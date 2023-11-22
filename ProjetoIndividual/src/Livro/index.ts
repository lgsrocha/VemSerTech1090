import { Autor } from "../Autor";
import { Usuario } from "../Usuario";

class Livro {
    private titulo: string;
    private autor: Autor[];
    private anoPublicacao: Date;
    private genero: string;
    private emprestado: Usuario['Id'];
    private quantidade: number;

    constructor(titulo: string, anoPublicacao: Date, genero: string,quantidade:number ,autor?: Autor[]) {

        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this,quantidade = quantidade;
        this.emprestado = 0;
    }

    get Titulo() {
        return this.titulo;
    }

    get Autor() {
        return this.autor;
    }

    get AnoPublicacao() {
        return this.anoPublicacao;
    }

    get Genero() {
        return this.genero;
    }

    get Emprestado() {
        return this.emprestado;
    }

    get Quantidade() {
        return this.quantidade;
    }

    set Emprestado(emprestado: Usuario['Id']) {
        this.emprestado = emprestado;
    }
}

export { Livro };
