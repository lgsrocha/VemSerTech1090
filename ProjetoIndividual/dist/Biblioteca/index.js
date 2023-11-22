"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const Livro_1 = require("../Livro");
class Biblioteca {
    constructor(livros, autores, usuarios) {
        Biblioteca.livros = livros;
        Biblioteca.autores = autores;
        Biblioteca.usuarios = usuarios;
    }
    listarLivrosPorAutor(nomeAutor) {
        try {
            if (!nomeAutor) {
                throw new Error("Autor não informado");
            }
        }
        catch (error) {
            return console.log(error.message);
        }
        try {
            const livrosPorAutor = Biblioteca.livros.filter(livro => {
                return livro.Autor.some(autor => autor.nome === nomeAutor);
            });
            if (livrosPorAutor.length === 0) {
                throw new Error("Autor não encontrado");
            }
            console.log(livrosPorAutor);
        }
        catch (error) {
            return console.log(error.message);
        }
    }
    listarLivrosEmprestados() {
        const livrosEmprestados = Biblioteca.livros.filter(livro => livro.Emprestado === true);
        console.log(livrosEmprestados);
    }
    listarUsuarios() {
        console.log(Biblioteca.usuarios);
    }
    adicionarLivros(titulo, anoPublicacao, genero) {
        try {
            if (!titulo || !anoPublicacao || !genero) {
                throw new Error("Dados incompletos");
            }
        }
        catch (error) {
            return console.log(error.message);
        }
        try {
            const livro = new Livro_1.Livro(titulo, anoPublicacao, genero);
            Biblioteca.livros.push(livro);
        }
        catch (error) {
            return console.log(error.message);
        }
    }
    removerLivros() { }
    adicionarAutores() { }
    removerAutores() { }
    adicionarUsuarios() { }
    removerUsuarios() { }
    emprestarLivro() { }
    receberLivro() { }
}
exports.Biblioteca = Biblioteca;
