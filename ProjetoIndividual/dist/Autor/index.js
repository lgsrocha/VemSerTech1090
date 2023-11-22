"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, dataNascimento, nacionalidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
    }
    associarLivro() { }
    desassociarLivro() { }
}
exports.Autor = Autor;
