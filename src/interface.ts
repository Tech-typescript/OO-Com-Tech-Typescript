/*============================================================
File: exemplo.ts.
Data: 19-07-23_1                                                                                                                                        
Usuário: Ontura
-------------------------------------------------------------
Graduando: Elias de Jesus Miranda 
DOCENTE: ANDRÉ DE LIMA SALGADO - DOCENTE - DCC
Disciplina: Sistemas Distribuídos (14A) 
-------------------------------------------------------------*/

interface Animal {
    nome: string;
    fazerBarulho(): void;
}

class Cachorro implements Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerBarulho(): void {
        console.log(this.nome + " está latindo!");
    }
}

