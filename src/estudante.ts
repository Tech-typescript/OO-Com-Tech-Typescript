/*============================================================
File: exemplo.ts.
Data: 19-07-23_1                                                                                                                                        
Usuário: Ontura
-------------------------------------------------------------
Graduando: Elias de Jesus Miranda 
DOCENTE: ANDRÉ DE LIMA SALGADO - DOCENTE - DCC
Disciplina: Sistemas Distribuídos (14A) 
-------------------------------------------------------------*/

class Estudante extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    apresentar(): void {
        console.log("Oi, meu nome é " + this.nome + " e eu sou um estudante.");
    }
}

