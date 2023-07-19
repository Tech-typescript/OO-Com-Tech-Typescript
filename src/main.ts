class GrupoApresentacao {
  grupo: number;
  data: string;
  horario: string;
  tempoGasto: number;
  qualidadeApresentacao: number;

  constructor(grupo: number, data: string, horario: string) {
    this.grupo = grupo;
    this.data = data;
    this.horario = horario;
    this.tempoGasto = 0;
    this.qualidadeApresentacao = 0;
  }

<<<<<<< HEAD
      return this.qualidadeApresentacao;
=======
  atribuirNota(tempoGasto: number, qualidadeApresentacao: number): void {
    this.tempoGasto = tempoGasto;
    this.qualidadeApresentacao = qualidadeApresentacao;
  }

  verificarNota(): number {
    if (this.tempoGasto > 17) {
      // Penalidade por tempo gasto fora dos critérios
      this.qualidadeApresentacao -= 0.5 * (this.tempoGasto - 15);
>>>>>>> c9814ff352c3d8a1ba9e7d146f5fcbb8fe35a5f5
    }

    else if (this.tempoGasto < 13) {
      this.qualidadeApresentacao -= 0.5 * (15 - this.tempoGasto);
    }

    return this.qualidadeApresentacao;
  }

  getResultado(): string {
    const nota = this.verificarNota();
    return `Grupo ${this.grupo} - Nota: ${nota}`;
  }
}

class SistemaCorrecao {
  public grupos: GrupoApresentacao[] = [];

  public registrarApresentacao(grupo: number, data: string, horario: string): void {
    const apresentacao = new GrupoApresentacao(grupo, data, horario);
    this.grupos.push(apresentacao);
  }

  public atribuirNota(grupo: number, tempoGasto: number, qualidadeApresentacao: number): void {
    const apresentacao = this.grupos.find((ap) => ap.grupo === grupo);
    if (apresentacao) {
      apresentacao.atribuirNota(tempoGasto, qualidadeApresentacao);
    } else {
      console.log(`Apresentação do grupo ${grupo} não encontrada.`);
    }
  }

  public consultarResultados(): void {
    this.grupos.forEach((apresentacao) => {
      console.log(apresentacao.getResultado());
    });
  }
}

const sistema = new SistemaCorrecao();

sistema.registrarApresentacao(1, "2023-07-25", "14:00");
sistema.registrarApresentacao(2, "2023-07-25", "16:00");
sistema.registrarApresentacao(3, "2023-07-25", "17:00");

// Atribuir notas para os grupos
sistema.atribuirNota(1, 12, 8); // Grupo 1 - Tempo gasto: 12 min, Qualidade: 8
sistema.atribuirNota(2, 19, 7); // Grupo 2 - Tempo gasto: 9 min, Qualidade: 7
sistema.atribuirNota(3, 15, 9); // Grupo 3 - Tempo gasto: 15 min, Qualidade: 9

// Função para exibir o resultado na página web
function exibirResultado() {
const resultadoDiv = document.getElementById('resultado');

if (resultadoDiv !== null) {
  let resultadoHTML = '';
  sistema.grupos.forEach((apresentacao) => {
    resultadoHTML += `<p>${apresentacao.getResultado()}</p>`;
  });

  resultadoDiv.innerHTML = resultadoHTML;
} else {
  console.log('Elemento "resultado" não encontrado no DOM.');
}
}

// Esperar até que o DOM esteja completamente carregado
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', exibirResultado);

document.getElementById("toggleFormButton").addEventListener("click", function() {
  const form = document.getElementById("inputForm");
  const button = document.getElementById("toggleFormButton");

  if(form && button){
    if (form.style.display === "none") {
      form.style.display = "block";
      button.textContent = "Cancelar"
    } else {
      form.style.display = "none";
      button.textContent = "Adicionar grupo"
    }
  }
});

document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const grupoInput = parseInt((<HTMLInputElement>document.getElementById("grupo")).value, 10);
  const dataInput = (<HTMLInputElement>document.getElementById("data")).value;
  const horarioInput = (<HTMLInputElement>document.getElementById("horario")).value;
  const tempoInput = parseInt((<HTMLInputElement>document.getElementById("tempo")).value);
  const qualiInput = parseInt((<HTMLInputElement>document.getElementById("qualidade")).value);

  if(grupoInput && dataInput && horarioInput && tempoInput && qualiInput){
    sistema.registrarApresentacao(grupoInput, dataInput, horarioInput);
    sistema.atribuirNota(grupoInput, tempoInput, qualiInput)

    console.log(sistema);
    exibirResultado();
  }

});

function submitForm(grupo, data, horario, tempo, qualidade) {

  console.log("Form submitted!");
  console.log("Grupo:", grupo);
  console.log("Data:", data);
  console.log("Horário:", horario);
  console.log("Tempo:", tempo);
  console.log("Qualidade:", qualidade);

}

=======
document.addEventListener('DOMContentLoaded', exibirResultado);
>>>>>>> c9814ff352c3d8a1ba9e7d146f5fcbb8fe35a5f5
