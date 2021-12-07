class Aluno {
    constructor(nome, qtdfaltas, notas) {
        this.nome = nome;
        this.qtdfaltas = qtdfaltas;
        this.notas = notas;
    };

    calcularMedia() {
        return this.notas.reduce(function (soma, notas) {
          return soma + notas;
        }) / this.notas.length;
      }
    
    faltas() {
        this.qtdfaltas++;
        return this.qtdfaltas
       }
    }

module.exports = Aluno;