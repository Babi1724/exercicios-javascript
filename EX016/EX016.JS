//Classifique nota (Aprovado/Reprovado)
// descobrir meios de filtrar o genero quando informar o nome

let nome = String(prompt("Informe o nome do aluno: "));

let nota1 = Number(prompt("Informe a primeira nota: "));

let nota2 = Number(prompt("Informe a segunda nota: "));

let nota3 = Number(prompt("Informe a terceira nota: "));

let nota4 = Number(prompt("Informe a quarta nota: "));

resultado = (nota1 + nota2 + nota3 + nota4) / 4;

if(resultado >=10){

    alert(`O(a) aluno(a) ${nome} foi aprovado(a) com ${resultado} `);
}
else{
    alert(`O(a) aluno(a) ${nome} foi reprovado(a) com ${resultado}`);
}