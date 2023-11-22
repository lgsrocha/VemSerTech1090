import { Autor } from "../Autor"
import { Livro } from "../Livro"
import { Usuario } from "../Usuario"

class Biblioteca {

    private static livros: Livro[];
    private static autores : Autor[] 
    private static usuarios : Usuario[] 

    constructor (
        livros : Livro[],
        autores : Autor[],
        usuarios : Usuario[]
    ){
        Biblioteca.livros = livros
        Biblioteca.autores = autores
        Biblioteca.usuarios = usuarios
    }

    listarLivrosPorAutor(nomeAutor: string){
        try {
            if (!nomeAutor){
                throw new Error("Autor não informado")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const livrosPorAutor = Biblioteca.livros.filter(livro => {
                return livro.Autor.some(autor => autor.nome === nomeAutor)
            })

            if (livrosPorAutor.length === 0){
                throw new Error("Autor não encontrado")
            }

            console.log(livrosPorAutor)
        } catch (error) { return console.log(error.message)}
    }
    
    listarLivrosEmprestados(){
        const livrosEmprestados = Biblioteca.livros.filter(livro => livro.Emprestado !== 0)
        console.log(livrosEmprestados)
    }
    
    listarUsuarios(){
        console.log(Biblioteca.usuarios)
    }

    adicionarLivros(
        titulo : string,
        anoPublicacao : Date,
        genero : string,
        quantidade : number
    ){
        try {
            if (!titulo || !anoPublicacao || !genero || !quantidade){
                throw new Error("Dados incompletos")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const livro = new Livro(titulo, anoPublicacao, genero, quantidade)
            Biblioteca.livros.push(livro)
            console.log(`Livro ${titulo} adicionado com sucesso`)
        } catch (error) {return console.log(error.message)}
    }

    removerLivros(titulo : string){
        try {
            if (!titulo){
                throw new Error("Título não informado")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const livro = Biblioteca.livros.find(livro => livro.Titulo === titulo)
            if (!livro){
                throw new Error("Livro não encontrado")
            }
            const index = Biblioteca.livros.indexOf(livro)
            Biblioteca.livros.splice(index, 1)
            console.log(`Livro ${titulo} removido com sucesso`)
        } catch (error) {return console.log(error.message)}
    }

    adicionarAutores(nome, dataNascimento, nacionalidade){
        try {
            if (!nome || !dataNascimento || !nacionalidade){
                throw new Error("Dados incompletos")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const autor = new Autor(nome, dataNascimento, nacionalidade)
            Biblioteca.autores.push(autor)
            console.log(`Autor ${nome} adicionado com sucesso`)
        } catch (error) {return console.log(error.message)}
    }

    removerAutores(nome){
        try {
            if (!nome){
                throw new Error("Nome não informado")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const autor = Biblioteca.autores.find(autor => autor.nome === nome)
            if (!autor){
                throw new Error("Autor não encontrado")
            }
            const index = Biblioteca.autores.indexOf(autor)
            Biblioteca.autores.splice(index, 1)
            console.log("Autor removido com sucesso")
        } catch (error) {return console.log(error.message)}
    }

    adicionarUsuarios(nome, email){
        try {
            if (!nome || !email){
                throw new Error("Dados incompletos")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const usuario = new Usuario(nome, email)
            Biblioteca.usuarios.push(usuario)
            console.log(`Usuário ${nome} adicionado com sucesso`)
        } catch (error) {return console.log(error.message)}
    }
    removerUsuarios(nome){
        try {
            if (!nome){
                throw new Error("Nome não informado")
            }
        } catch (error) {return console.log(error.message)}

        try {
            const usuario = Biblioteca.usuarios.find(usuario => usuario.Nome === nome)
            if (!usuario){
                throw new Error("Usuário não encontrado")
            }
            const index = Biblioteca.usuarios.indexOf(usuario)
            Biblioteca.usuarios.splice(index, 1)
            console.log("Usuário removido com sucesso")
        } catch (error) {return console.log(error.message)}
    }

    emprestarLivro(titulo: string, id: number) {
        try {
            if (!titulo || !id) {
                throw new Error("Dados incompletos");
            }
        } catch (error) {
            return console.log(error.message);
        }

        try {
            const livro = Biblioteca.livros.find((livro) => livro.Titulo === titulo);
            if (!livro) {
                throw new Error("Livro não encontrado");
            }
            if (livro.Emprestado !== 0) {
                throw new Error("Todos exemplares emprestados");
            }
            const usuario = Biblioteca.usuarios.find((usuario) => usuario.Id === id);
            if (!usuario) {
                throw new Error("Usuário não encontrado");
            }
            livro.Emprestado = usuario.Id;
            usuario.LivrosEmprestados.push(livro);
            console.log(`Livro ${titulo} emprestado para ${usuario.Nome}`);
            console.log(`restam ${livro.Quantidade} exemplares`);
        } catch (error) {
            return console.log(error.message);
        }
    }

    receberLivro(titulo: string, id: number){
        try {
            if (!titulo || !id) {
                throw new Error("Dados incompletos");
            }
        } catch (error) {
            return console.log(error.message);
        }

        try {
            const livro = Biblioteca.livros.find((livro) => livro.Titulo === titulo);
            if (!livro) {
                throw new Error("Livro não encontrado");
            }
            if (livro.Emprestado === 0) {
                throw new Error("Livro não emprestado");
            }
            const usuario = Biblioteca.usuarios.find((usuario) => usuario.Id === id);
            if (!usuario) {
                throw new Error("Usuário não encontrado");
            }
            if (livro.Emprestado !== usuario.Id) {
                throw new Error("Livro não emprestado para este usuário");
            }
            livro.Emprestado = 0;
            usuario.LivrosEmprestados = usuario.LivrosEmprestados.filter((livro) => livro.Titulo !== titulo);
            console.log(`Livro ${titulo} devolvido por ${usuario.Nome}`);
            console.log(`restam ${livro.Quantidade} exemplares`);
        } catch (error) {
            return console.log(error.message);
        }
    }    
}

export {Biblioteca}