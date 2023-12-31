// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numeros = [4, 2, 5, 3, 7];
let soma= 0;

for(let num of numeros) {
    soma += num;
}

document.write(`<h1>Array: [${numeros}]</h1>`);
document.write(`<h1>Soma dos numeros do array: ${soma}</h1>`);