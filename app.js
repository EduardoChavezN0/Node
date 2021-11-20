var http=require ('http');

var servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200, {'Content-type':'text/html'});
    respuesta.write('<h3>Server Basico con Note.JS</h3>');
    console.log('petición web');
    respuesta.end();

});

servidor.listen(3000);
console.log('Ejecutando un server local con note.JS');
