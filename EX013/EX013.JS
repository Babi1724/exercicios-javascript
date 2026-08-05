//Compare dois números (qual é maior)

let num1 = Number(prompt("Informe o primeiro numero: "))

let num2 = Number(prompt("Informe o segundo numero: "))


if ( num1>num2){
    alert(` O ${num1} é o maior `);
} else if(num2>num1){
    alert(` O ${num2} é o maior`);
} else{
    alert("Nenhum é maior que o outro");
}

