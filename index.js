   const http = require("http");
   const moment = require ("moment");
   const PORT = 3006;
   const server =  http.createServer((req, res)=>{  //la funcion callback recibe dos parámetros "petición y respuesta"
        let response = "Mensaje por defecto";
        let hora_actual = 13;//moment().format("HH");
        if( hora_actual > 6 && hora_actual < 12){
            response = "Muy buenos días";
        }else if( hora_actual > 12 && hora_actual < 19){
            response = "Buenas tardes";
        }else{
            response = "Buenas noches";
        }
        res.end(` SALUDOS  --> ${response}`);

        res.end("Hola que tal buenas noches") // sirve para terminar la petición y enviarle datos al cliente.
   })

   server.listen(PORT, ()=>{
       console.log(`Server on http://localhost:${PORT}`)
   })