const cliente1 = new cliente();
cliente1.nome = "Walison";
cliente1.cpf = 23578965469;

const cliente2 = new cliente();
cliente2.nome = "leo";
cliente2.cpf = 45789632457;


const contaCorrenteEsmaylon = new contaCorrente();
contaCorrenteEsmaylon.agencia = 1001;

contaCorrenteEsmaylon.depositar(100);
contaCorrenteEsmaylon.depositar(100);
const valorSacado = contaCorrenteEsmaylon.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteEsmaylon);
