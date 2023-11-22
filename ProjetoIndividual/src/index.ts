const prompt = require("prompt-sync")();

import { Autor } from "./Autor";
import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

const autor1 = new Autor("Autor 1", new Date("01/01/2021"), "Brasileiro");
const autor2 = new Autor("Autor 2", new Date("01/01/2021"), "Brasileiro");
const autor3 = new Autor("Autor 3", new Date("01/01/2021"), "Brasileiro");

const livro1 = new Livro("Livro 1", new Date("01/01/2021"), "Genero 1",3, [autor1]);
const livro2 = new Livro("Livro 2", new Date("01/01/2022"), "Genero 2",10, [autor2,autor1]);
const livro3 = new Livro("Livro 3", new Date("01/01/2023"), "Genero 3",15, [autor3]);

const usuario1 = new Usuario("Usuário 1", "usuario1@example.com");
const usuario2 = new Usuario("Usuário 2", "usuario2@example.com");
const usuario3 = new Usuario("Usuário 3", "usuario3@example.com");

const biblioteca = new Biblioteca([livro1,livro2,livro3],[autor1,autor2,autor3],[usuario1,usuario2,usuario3]);

console.log("--------------------------------")
console.log("\n Bem- vindo(a) à Biblioteca \n")
console.log("--------------------------------")

main()
function main (){

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
    12  sair
    `)

    const escolha = prompt(``)

        
        switch (escolha) {

            case "1":
                const nomeAutor = prompt("Digite o nome do autor: ")
                biblioteca.listarLivrosPorAutor(nomeAutor)
                main()
                break;
            
            case "2":
                biblioteca.listarLivrosEmprestados()
                main()
                break;

            case "3":
                biblioteca.listarUsuarios()           
                main()
                break;
                

            case "4":
                const idUsuarioEmprestimo = parseInt(prompt("Digite o id do usuário: "))
                const tituloLivroEmprestimo = prompt("Digite o nome do livro: ")
                biblioteca.emprestarLivro(tituloLivroEmprestimo, idUsuarioEmprestimo)
                main()
                break;
                

            case "5":
                const idUsuarioDevolucao = parseInt(prompt("Digite o id do usuário: "))
                const tituloLivroDevolucao = prompt("Digite o nome do livro: ")
                biblioteca.receberLivro(tituloLivroDevolucao, idUsuarioDevolucao)
                main()
                break;

            case "6":
                const tituloAdicionar = prompt("Digite o título do livro: ")
                const anoPublicacao = prompt("Digite o ano de publicação do livro (yyyy): ");
                let dataPublicacao : Date;
                if (!/^\d{4}$/.test(anoPublicacao)) {
                    console.log("Ano inválido. Digite novamente.");
                    anoPublicacao;
                } else {
                    dataPublicacao = new Date(anoPublicacao);
                }
                const genero = prompt("Digite o gênero do livro: ")
                const quantidade = prompt("Digite a quantidade de exemplares: ")
        
                biblioteca.adicionarLivros(tituloAdicionar, dataPublicacao, genero, quantidade)
                main()
                break;

            case "7":
                const tituloRemover = prompt("Digite o título do livro: ")
                biblioteca.removerLivros(tituloRemover)
                main()
                break;
            
            case "8":
                const nomeAutorAdicionar = prompt("Digite o nome do autor: ")
                const dataNascimento = prompt("Digite a data de nascimento do autor (dd/mm/yyyy): ");
                let dataNascimentoAutor : Date;
                if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
                    console.log("Data inválida. Digite novamente.");
                    dataNascimento;
                } else {
                    dataNascimentoAutor = new Date(dataNascimento);
                }
                const nacionalidade = prompt("Digite a nacionalidade do autor: ")
                biblioteca.adicionarAutores(nomeAutorAdicionar, dataNascimentoAutor, nacionalidade)
                main()
                break;
            
            case "9":
                const nomeAutorRemover = prompt("Digite o nome do autor: ")
                biblioteca.removerAutores(nomeAutorRemover)
                main()
                break;
            
            case "10":
                const nomeUsuarioAdicionar = prompt("Digite o nome do usuário: ")
                const emailUsuarioAdicionar = prompt("Digite o email do usuário: ")
                biblioteca.adicionarUsuarios(nomeUsuarioAdicionar, emailUsuarioAdicionar)
                main()
                break;
            
            case "11":
                const nomeUsuarioRemover = prompt("Digite o nome do usuário: ")
                biblioteca.removerUsuarios(nomeUsuarioRemover)
                main()
                break;

            case "12":
                console.log("Até logo!")
                break;

            default:
                console.log("Opção inválida")
                main()
                break;
        }
}