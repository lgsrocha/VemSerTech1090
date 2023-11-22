import { Livro } from "../Livro"

class Usuario{
    private static proximoID: number = 1;
    private id : number
    private nome : string
    private email : string
    private livrosEmprestados : Livro[]

    constructor(nome: string, email : string){
        this.id = Usuario.proximoID++
        this.nome = nome
        this.email = email
        this.livrosEmprestados = []
    }

    get Nome(){
        return this.nome
    }

    get Email(){
        return this.email
    }

    get LivrosEmprestados(){
        return this.livrosEmprestados
    }

    set LivrosEmprestados(livrosEmprestados : Livro[]){
        this.livrosEmprestados = livrosEmprestados
    }

    set Email(email : string){
        this.email = email
    }

    get Id(){
        return this.id
    }

    listarLivros(){}
}
export {Usuario}