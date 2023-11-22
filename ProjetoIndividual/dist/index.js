"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const Autor_1 = require("./Autor");
const Biblioteca_1 = require("./Biblioteca");
const Livro_1 = require("./Livro");
const Usuario_1 = require("./Usuario");
const autor1 = new Autor_1.Autor("Autor 1", new Date("01/01/2021"), "Brasileiro");
const autor2 = new Autor_1.Autor("Autor 2", new Date("01/01/2021"), "Brasileiro");
const autor3 = new Autor_1.Autor("Autor 3", new Date("01/01/2021"), "Brasileiro");
const livro1 = new Livro_1.Livro("Livro 1", new Date("01/01/2021"), "Genero 1", [autor1]);
const livro2 = new Livro_1.Livro("Livro 2", new Date("01/01/2022"), "Genero 2", [autor2, autor1]);
const livro3 = new Livro_1.Livro("Livro 3", new Date("01/01/2023"), "Genero 3", [autor3]);
const usuario1 = new Usuario_1.Usuario("Usuário 1", "usuario1@example.com");
const usuario2 = new Usuario_1.Usuario("Usuário 2", "usuario2@example.com");
const usuario3 = new Usuario_1.Usuario("Usuário 3", "usuario3@example.com");
const biblioteca = new Biblioteca_1.Biblioteca([livro1, livro2, livro3], [autor1, autor2, autor3], [usuario1, usuario2, usuario3]);
console.log("--------------------------------");
console.log("\n Bem- vindo(a) à Biblioteca \n");
console.log("--------------------------------");
main();
function main() {
    console.log(`
    Digite: 
    1   listar livros por autor
    2   listar livros emprestados
    3   listar usuarios
    4   emprestar livro
    5   devolver livro
    6   adicionar livro
    7   remover livro
    8   adicionar autores
    9   remover autores
    10  adicionar usuario
    11  remover usuário
    `);
    const escolha = prompt(``);
    switch (escolha) {
        case "1":
            const nomeAutor = prompt("Digite o nome do autor: ");
            biblioteca.listarLivrosPorAutor(nomeAutor);
            main();
            break;
        case "2":
            biblioteca.listarLivrosEmprestados();
            main();
            break;
        case "3":
            biblioteca.listarUsuarios();
            main();
            break;
        case "4":
            biblioteca.emprestarLivro();
            main();
            break;
        case "5":
            biblioteca.receberLivro();
            main();
            break;
        case "6":
            const titulo = prompt("Digite o título do livro: ");
            const anoPublicacao = prompt("Digite o ano de publicação do livro (yyyy): ");
            let dataPublicacao;
            if (!/^\d{4}$/.test(anoPublicacao)) {
                console.log("Ano inválido. Digite novamente.");
                anoPublicacao;
            }
            else {
                dataPublicacao = new Date(anoPublicacao);
            }
            const genero = prompt("Digite o gênero do livro: ");
            biblioteca.adicionarLivros(titulo, dataPublicacao, genero);
            main();
            break;
        case "7":
            biblioteca.removerLivros();
            main();
            break;
        case "8":
            biblioteca.adicionarAutores();
            main();
            break;
        case "9":
            biblioteca.removerAutores();
            main();
            break;
        case "10":
            biblioteca.adicionarUsuarios();
            main();
            break;
        case "11":
            biblioteca.removerUsuarios();
            main();
            break;
        case "12":
            break;
        default:
            console.log("Opção inválida");
            main();
            break;
    }
}
