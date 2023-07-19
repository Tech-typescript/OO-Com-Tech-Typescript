## Apresentação do TypeScript com Orientação a Objetos

Introdução:
> Olá a todos! Hoje estaremos explorando o TypeScript, uma linguagem de programação que traz recursos adicionais para o JavaScript, incluindo suporte a tipos estáticos e paradigma orientado a objetos.
> O TypeScript é compilado para JavaScript, tornando-o compatível com qualquer navegador moderno. Durante esta apresentação, vamos interagir e escrever código diretamente em nossos navegadores.

I. O que é o TypeScript?
O TypeScript é uma   linguagem de programação desenvolvida pela Microsoft que estende o JavaScript, adicionando recursos de tipagem estática e suporte a classes, interfaces, herança e outros conceitos da orientação a objetos.

II. Configurando o ambiente:
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
   
   const pessoa1 = new Pessoa("João", 25);
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

V. Conclusão:
Nesta breve apresentação, exploramos o TypeScript e sua capacidade de trazer recursos da orientação a objetos para o JavaScript. Vimos como criar uma classe simples, compilar o código para JavaScript e executá-lo em um navegador. O TypeScript oferece uma maneira poderosa de escrever código JavaScript mais seguro e escalável.

Agora que você tem uma noção básica do TypeScript, sinta-se à vontade para explorar mais recursos, como herança, interfaces e tipos estáticos. Divirta-se programando!
