class Autor{
    nome : string
    dataNascimento : Date
    nacionalidade : string

    constructor(nome: string, dataNascimento : Date, nacionalidade : string){
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.nacionalidade = nacionalidade
    }

    associarLivro(){}
    desassociarLivro(){}
}
export {Autor}