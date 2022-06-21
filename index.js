import {cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
 
const cliente1 = new cliente("walison", 23578965469);
const cliente2 = new cliente("leo", 45789632457);

const contaCorrenteWalison = new ContaCorrente(1001, cliente1);
contaCorrenteWalison.depositar(500);
const conta2 = new ContaCorrente(102, cliente2); 

let valor = 200;
contaCorrenteWalison.transferir(valor, conta2);

console.log(contaCorrenteWalison);
console.log(conta2);