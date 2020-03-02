var http = require('http');

//createServer: Cria um servidor de protocolo http
//listen: Informa a porta de rede do servidor
//req e res: Requisição e resposta
http.createServer(function(req, res){
    res.end("Hello World!");
}).listen(8081);

console.log("O servidor está rodando!");