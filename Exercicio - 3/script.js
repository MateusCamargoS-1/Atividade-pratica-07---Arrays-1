// Utilizar os métodos push, pop, unshift e shift para manipular um
// array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
// de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do
// array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do
// array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

// push: add final do array; pop: remove final do array; unshift: add começo do array; shift: remove inicio array.

let frutas = ['Manga', 'Abacaxi', 'Maçã'];

// Adicionando uma fruta no final do array
frutas.push('Banana');

// Removendo a ultima fruta do array
frutas.pop();

// Adicionando uma fruta no inicio do array
frutas.unshift('Uva');

// Removendo a primeira fruta do array
frutas.shift();


console.log(frutas);