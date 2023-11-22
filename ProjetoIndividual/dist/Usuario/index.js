"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    listarLivros() { }
}
exports.Usuario = Usuario;
