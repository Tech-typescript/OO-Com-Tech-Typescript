var GrupoApresentacao = /** @class */ (function () {
    function GrupoApresentacao(grupo, data, horario) {
        this.grupo = grupo;
        this.data = data;
        this.horario = horario;
        this.tempoGasto = 0;
        this.qualidadeApresentacao = 0;
    }
    GrupoApresentacao.prototype.atribuirNota = function (tempoGasto, qualidadeApresentacao) {
        this.tempoGasto = tempoGasto;
        this.qualidadeApresentacao = qualidadeApresentacao;
    };
    GrupoApresentacao.prototype.verificarNota = function () {
        if (this.tempoGasto > 17) {
            // Penalidade por tempo gasto fora dos critérios
            this.qualidadeApresentacao -= 0.5 * (this.tempoGasto - 15);
        }
        else if (this.tempoGasto < 13) {
            this.qualidadeApresentacao -= 0.5 * (15 - this.tempoGasto);
        }
        return this.qualidadeApresentacao;
    };
    GrupoApresentacao.prototype.getResultado = function () {
        var nota = this.verificarNota();
        return "Grupo ".concat(this.grupo, " - Nota: ").concat(nota);
    };
    return GrupoApresentacao;
}());
var SistemaCorrecao = /** @class */ (function () {
    function SistemaCorrecao() {
        this.grupos = [];
    }
    SistemaCorrecao.prototype.registrarApresentacao = function (grupo, data, horario) {
        var apresentacao = new GrupoApresentacao(grupo, data, horario);
        this.grupos.push(apresentacao);
    };
    SistemaCorrecao.prototype.atribuirNota = function (grupo, tempoGasto, qualidadeApresentacao) {
        var apresentacao = this.grupos.find(function (ap) { return ap.grupo === grupo; });
        if (apresentacao) {
            apresentacao.atribuirNota(tempoGasto, qualidadeApresentacao);
        }
        else {
            console.log("Apresenta\u00E7\u00E3o do grupo ".concat(grupo, " n\u00E3o encontrada."));
        }
    };
    SistemaCorrecao.prototype.consultarResultados = function () {
        this.grupos.forEach(function (apresentacao) {
            console.log(apresentacao.getResultado());
        });
    };
    return SistemaCorrecao;
}());
var sistema = new SistemaCorrecao();
sistema.registrarApresentacao(1, "2023-07-25", "14:00");
sistema.registrarApresentacao(2, "2023-07-25", "16:00");
sistema.registrarApresentacao(2, "2023-07-25", "17:00");
// Atribuir notas para os grupos
sistema.atribuirNota(1, 12, 8); // Grupo 1 - Tempo gasto: 12 min, Qualidade: 8
sistema.atribuirNota(2, 19, 7); // Grupo 2 - Tempo gasto: 9 min, Qualidade: 7
sistema.atribuirNota(3, 15, 9); // Grupo 3 - Tempo gasto: 15 min, Qualidade: 9
// Função para exibir o resultado na página web
function exibirResultado() {
    var resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv !== null) {
        var resultadoHTML_1 = '';
        sistema.grupos.forEach(function (apresentacao) {
            resultadoHTML_1 += "<p>".concat(apresentacao.getResultado(), "</p>");
        });
        resultadoDiv.innerHTML = resultadoHTML_1;
    }
    else {
        console.log('Elemento "resultado" não encontrado no DOM.');
    }
}
// Esperar até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', exibirResultado);
