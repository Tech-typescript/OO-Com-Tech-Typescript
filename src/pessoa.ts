/*============================================================
File: exemplo.ts.
Data: 19-07-23_1                                                                                                                                        
Usuário: Onrutas
-------------------------------------------------------------
Graduando: Elias de Jesus Miranda 
DOCENTE: ANDRÉ DE LIMA SALGADO - DOCENTE - DCC
Disciplina: Sistemas Distribuídos (14A) 
-------------------------------------------------------------*/

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
}
