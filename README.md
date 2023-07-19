## Apresentação do TypeScript com Orientação a Objetos

Introdução:
> Olá a todos! Hoje estaremos explorando o TypeScript, uma linguagem de programação que traz recursos adicionais para o JavaScript, incluindo suporte a tipos estáticos e paradigma orientado a objetos.
> O TypeScript é compilado para JavaScript, tornando-o compatível com qualquer navegador moderno. Durante esta apresentação, vamos interagir e escrever código diretamente em nossos navegadores.

I. ,.O que é o TypeScript?
O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que estende o JavaScript, adicionando recursos de tipagem estática e suporte a classes, interfaces, herança e outros conceitos da orientação a objetos.

II. Vamos configurar o ambiente:
1. Primeiro, vamos verificar se temos o Node.js instalado em nossas máquinas. Abra o terminal e digite o seguinte comando:
   ```
   node -v
   ```

2. Caso o Node.js não esteja instalado, acesse o site oficial (https://nodejs.org) e faça o download da versão adequada ao seu sistema operacional.

3. Com o Node.js instalado, vamos instalar o TypeScript globalmente. No terminal, execute o seguinte comando:
   ```
   npm install -g typescript
   ```

III. Exemplo de código:
Agora que configuramos nosso ambiente, vamos criar uma classe simples em TypeScript e compilar para JavaScript.

1. Crie um novo arquivo chamado "exemplo.ts" em seu editor de texto favorito e adicione o seguinte código:
   ```typescript
   class Pessoa {
     nome: string;
     idade: number;
   
     constructor(nome: string, idade: number) {
       this.nome = nome;
       this.idade = idade;
     }
       saudacao() {
       console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
     }
   }
   
   const pessoa1 = new Pessoa("Elias", 25);
   pessoa1.saudacao();
   ```

2. Agora, no terminal, navegue até o diretório onde você salvou o arquivo "exemplo.ts" e compile-o usando o TypeScript:
   ```
   tsc exemplo.ts
   ```

3. Isso irá gerar um novo arquivo chamado "exemplo.js". Abra-o para ver o código JavaScript equivalente ao código TypeScript que escrevemos.

IV. Executando o exemplo no navegador:
1. Crie um novo arquivo HTML chamado "index.html" em seu editor de texto e adicione o seguinte código:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Exemplo TypeScript</title>
     <script src="exemplo.js"></script>
   </head>
   <body>
     <script>
       pessoa1.saudacao();
     </script>
   </body>
   </html>
   ```

2. Salve o arquivo e abra-o em seu navegador. Abra o console do navegador para ver a saudação sendo exibida.

3. Outras vantagems quando se trata de métodos Paradigma Orientado a Objetos

1. Tipos de dados estáticos:
Uma das principais vantagens do TypeScript é a capacidade de adicionar tipos estáticos às nossas variáveis, funções e objetos. Isso ajuda a evitar erros de digitação, melhora a legibilidade do código e oferece suporte ao desenvolvimento de software mais seguro. Veja um exemplo:

```typescript
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

function saudacao(nome: string): void {
  console.log("Olá, " + nome + "!");
}

saudacao(nome);
```

2. Classes e Objetos:
Em TypeScript, podemos usar o conceito de classes para criar objetos. As classes nos permitem definir propriedades e métodos que descrevem o comportamento dos objetos. Vamos ver um exemplo:

```typescript
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

let pessoa1 = new Pessoa("Maria", 30);
pessoa1.apresentar();
```

3. Herança e Polimorfismo também é implementado:
Outro conceito importante da programação orientada a objetos é a herança, que permite que uma classe herde propriedades e métodos de outra classe. O TypeScript suporta herança de classes usando a palavra-chave `extends`. Vamos ver um exemplo:

```typescript
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

let estudante1 = new Estudante("Carlos", 20, "12345");
estudante1.apresentar();
```

4. Interfaces:
As interfaces são usadas para definir contratos para classes e objetos. Elas especificam quais propriedades e métodos devem ser implementados. As interfaces são úteis para alcançar o polimorfismo e garantir que as classes cumpram determinados requisitos. Vejamos um exemplo:

```typescript
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

let cachorro1 = new Cachorro("Bobby");
cachorro1.fazerBarulho();
```

Conclusão:
Esses são apenas alguns exemplos de como o TypeScript suporta o paradigma orientado a objetos. Com o TypeScript, podemos aproveitar a **tipagem estática**, classes, herança, interfaces e muito mais para escrever código mais seguro e reutilizável. Esperamos que essa introdução tenha despertado seu interesse em explorar ainda mais o TypeScript e suas capacidades!

Nesta breve apresentação, exploramos o TypeScript e sua capacidade de trazer recursos da orientação a objetos para o JavaScript. Vimos como criar uma classe simples, compilar o código para JavaScript e executá-lo em um navegador. O TypeScript oferece uma maneira poderosa de escrever código JavaScript mais seguro e escalável.

Agora que você tem uma noção básica do TypeScript, sinta-se à vontade para explorar mais recursos, como herança, interfaces e tipos estáticos. Divirta-se programando!


-
