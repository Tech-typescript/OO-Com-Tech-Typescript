## OO-Com-TypeScript

Introdução:
> Olá a todos! Hoje estaremos explorando o TypeScript, uma linguagem de programação que traz recursos adicionais para o JavaScript, incluindo suporte a tipos estáticos e paradigma orientado a objetos.
> O TypeScript é compilado para JavaScript, tornando-o compatível com qualquer navegador moderno. Durante esta apresentação, vamos interagir e escrever código diretamente em nossos navegadores.

I. ,.O que é o TypeScript?
O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que estende o JavaScript, adicionando recursos de tipagem estática e suporte a classes, interfaces, herança e outros conceitos da orientação a objetos.

II. Vamos configurar o ambiente:
1. Primeiro, vamos verificar se temos o Node.js instalado em nossas máquinas. Abra o terminal e digite o seguinte comando. Este comando retornará a versão do **node** :
   ```
   node -v
   ```

2. Caso o Node.js não esteja instalado, acesse o site oficial (https://nodejs.org) e faça o download da versão adequada ao seu sistema operacional.

3. Com o Node.js não estiver instalado, vamos instalar o TypeScript globalmente. No terminal, execute o seguinte comando:
   ```
   sudo apt npm install -g typescript

   sudo apt install node-typescript

   ```
III. Exemplo de código:

Agora que configuramos nosso ambiente, vamos criar uma classe simples em TypeScript e compilar para JavaScript.

1. Crie um novo arquivo chamado "exemplo.ts" em seu editor de texto favorito, no meu caso vou utilizar o vim, e adicione o seguinte código:
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

1. Crie um novo arquivo HTML chamado "index.html" em seu editor de texto e adicione o seguinte código, note que este
   arquivo é o responsável para chamar outras paginhas no servidor web:
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

V. Executando o exemplo no **web local**:
Se você deseja executar um arquivo HTML sem usar um navegador, pode fazê-lo utilizando um servidor web local. Um servidor web local permite que você hospede e execute o arquivo HTML em um ambiente semelhante ao de um servidor real, mas apenas no seu computador.

Aqui estão os passos para executar um arquivo HTML usando um servidor web local:

1. Escolha um servidor web local: Existem várias opções disponíveis para criar um servidor web local, sendo algumas das mais populares:

   - Node.js com o pacote http-server: Se você já tem o Node.js instalado no seu computador, pode usar o pacote http-server para criar um servidor web local rapidamente. Basta instalar o pacote globalmente usando o npm (gerenciador de pacotes do Node.js) e executá-lo a partir do diretório onde o seu arquivo HTML está localizado.

   Para instalar o http-server globalmente, abra o terminal ou prompt de comando e digite:
   ```
   npm install -g http-server
   ```

   Em seguida, navegue para o diretório onde o seu arquivo HTML está localizado e execute o servidor com o seguinte comando:
   ```
   http-server
   ```

   - Python: Se você tem o Python instalado no seu computador, pode usar o módulo http.server para criar um servidor web local. Basta abrir o terminal ou prompt de comando, navegar até o diretório onde o arquivo HTML está localizado e executar o seguinte comando:

   ```
   python -m http.server
   ```

   Isso criará um servidor web local na porta 8000 (outra opção é usar a porta 8080 executando `python -m http.server 8080`).

2. Acesse o arquivo HTML: Após iniciar o servidor web local, abra o seu navegador e digite o seguinte endereço na barra de endereços:

   ```
   http://localhost:8080
   ```

   (Ou qualquer outra porta que você escolheu, se for diferente da padrão)

   Isso abrirá o arquivo HTML no servidor web local, permitindo que você veja e interaja com a página sem a necessidade de usar um servidor real.

Lembre-se de que, para executar um servidor web local, você precisa ter o arquivo HTML presente no diretório onde está executando o servidor. Se você quiser executar scripts ou interagir com o HTML, certifique-se de que quaisquer recursos (por exemplo, scripts JavaScript) estejam corretamente referenciados e disponíveis no mesmo diretório.

3. Outras vantagems quando se trata de métodos Paradigma Orientado a Objetos

4. Tipos de dados estáticos:

Uma das principais vantagens do TypeScript é a capacidade de adicionar tipos estáticos às nossas variáveis, funções e objetos. Isso ajuda a evitar erros de digitação, melhora a legibilidade do código e oferece suporte ao desenvolvimento de software mais seguro. Veja um exemplo:

```typescript
let nome: string = "Elias Miranda";
let idade: number = 25;
let ativo: boolean = true;

function saudacao(nome: string): void {
 console.log("Olá, " + nome + "!");
}

saudacao(nome);
```

5. Classes e Objetos:
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

6. Herança e Polimorfismo também é implementado:
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

7. Interfaces:
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
