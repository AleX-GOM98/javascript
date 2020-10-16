/*
var nome = "Alex Maia";
var idade = 22;
var idade2 = 10;
//alert(nome + " tem " + idade + " anos. ");
//alert(idade + idade2);
console.log(nome.replace("Maia","Gonçalves"))
*/
/*
var lista = ["maça", "pera", "laranja"];
lista.push("Uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
*/
/*
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}]
console.log(frutas[1].nome);
*/
/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18) {
	alert("maior de idade");
}else{
	alert("menor de idade");
}
*/
/*
var count = 0;
while(count <= 5){
	console.log(count);
	count++;
};
*/
/*
var count;
for (var count = 0; count <= 5; count++) {
	alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/
/*
function soma(n1, n2){
	return n2 + n1;
}

function setReplace(frase, nome, novo_nome) {
	return frase.replace(nome, novo_nome);
	// body...
}
*/

function clicou(){
	document.getElementById("agradecimento").innerHTML ="Obrigado por clicar";
	alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://www.facebook.com/")
	window.location.href = "https://www.facebook.com/";
}


function funcaoChange(elemento){
	console.log(elemento.value);
}
