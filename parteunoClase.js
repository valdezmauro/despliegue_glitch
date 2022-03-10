 //EJERCICIO 1 CLASE 3

/*let getRandom = () =>{
    return Math.ceil(Math.random() * 20);
}

let resultados = {};

for (let i = 0; i < 10000; i++) {
    let numAleatorio = getRandom();
    resultados[numAleatorio] = resultados.hasOwnProperty(numAleatorio) ? resultados[numAleatorio] + 1 : 1;
}

console.log(resultados);

//ejercicio que muestra combinaciones entre numeros del 0 al 20 

*/

let Fechas = require("./datesController");
let cumple = "07/03/1996";
let FECHA = new Fechas (cumple);


console.log(" TODAY ---------------->", FECHA.getToday());
console.log(" YEARS ---------------->", FECHA.getDifferencesYears());
console.log(" DAYS ---------------->", FECHA.getDifferencesDays());
console.log(" BIRTHDAY ---------------->", FECHA.birthday.format("L"));




 

/*const productos = [
    {id:1, nombre: 'escuadra', precio: 323.45},
    {id:2, nombre: 'calculadora', precio: 234.56},
    {id:3, nombre: 'globo terraqueo', precio: 145.67},
    {id:4, nombre: 'paleta pintura', precio: 456.78},
    {id:5, nombre: 'reloj', precio: 67.89},
    {id:6, nombre: 'agenda', precio: 78.90}
]

let respuesta = productos.reduce((prev, obj, i) =>{
    if (i == 0){
        return {
            nombres: obj.nombre,
            total: obj.precio,
            minor: obj,
            major: obj
        }
    }else{
        let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
        let major = prev.major.precio > obj.precio ? prev.major : obj;
        return {
            nombres: `${prev.nombres}, ${obj.nombre}`,
            total: prev.total + obj.precio,
            minor,
            major
        }
    }
}, {});

console.log(respuesta);
*/ 