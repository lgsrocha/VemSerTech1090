"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, anoPublicacao, genero, autor) {
        this.emprestado = false;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
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
}
exports.Livro = Livro;
