let Aluno = require("./aluno");

let estudantes = [];

let aluno5 = new Aluno('Madu', 3, [8, 7, 8]);
let aluno6 = new Aluno('Lucas', 7, [5, 10, 7]);
let aluno7 = new Aluno('Bia', 1, [10, 8, 8]);

estudantes.push(aluno5, aluno6, aluno7);
module.exports = estudantes;