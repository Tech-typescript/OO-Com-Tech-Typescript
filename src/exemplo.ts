/*============================================================
File: exemplo.ts.
Data: 19-07-23_1                                                                                                                                        
Usuário: Ontura
-------------------------------------------------------------
Graduando: Elias de Jesus Miranda 
DOCENTE: ANDRÉ DE LIMA SALGADO - DOCENTE - DCC
Disciplina: Sistemas Distribuídos (14A) 
-------------------------------------------------------------*/

class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
