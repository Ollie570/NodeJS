//Função require: Serve para requisitar funções de outros arquivos
var SomaFunc = require("./soma");
var SubFunc = require("./sub");
var DivFunc = require("./div");
var MultiFunc = require("./multi");

console.log(SomaFunc(1, 3));
console.log(SubFunc(10, 5));
console.log(DivFunc(1, 3));
console.log(MultiFunc(1, 3));
