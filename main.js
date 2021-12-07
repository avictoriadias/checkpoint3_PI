// let Aluno = require("./aluno");
let estudantes = require("./estudantes");

let curso = {
    NomeDoCurso: 'Digital House', 
    NotaDeAprovacao: 7, 
    FaltasMax: 3, 
    ListaEstudantes: estudantes,
    adicionarAluno: function(aluno){
        curso.ListaEstudantes.push(aluno)
    },
    aprovacao: function(aluno) {
        let media = aluno.calcularMedia();
        let falta = aluno.qtdfaltas;
        let faltas = this.FaltasMax;
        let nota = this.NotaDeAprovacao

        if ((nota > media && falta > faltas) || (falta == faltas && media < nota * 1.1))
            return false

        return true
    },
    checarAprovacao: function() {
        let aprovados = [];
        this.ListaEstudantes.forEach(function(estudante){
            aprovados.push(curso.aprovacao(estudante))
        })
        return aprovados
    }
}

// let aluno2 = new Aluno('Thyago', 15, [0, 7, 8]);
// let aluno3 = new Aluno('Luã', 5, [10, 10, 9]);
// let aluno4 = new Aluno('Romulo', 0, [9, 7, 8]);

// curso.AdicionarAluno(aluno2);
// curso.AdicionarAluno(aluno3);
// curso.AdicionarAluno(aluno4);

console.log(curso);
console.log(curso.aprovacao(estudantes[2]));
console.log(curso.checarAprovacao())