console.log ('Estoy en el archivo externo')

/* 
Comentarios 
multiples
*/


//console.log ('Esto es un comentario de una linea')


/* creando avriables */
var nombre;
nombre = "Pepe";
console.log (nombre);

var apellido = "Zolezzi";
console.log (apellido);

/* se puede resumir */
var provincia = "CABA";


/* concatenacion */
console.log ('Mi nombre y apellido es: ' + nombre + ' ' + apellido + ' y vivo en ' + provincia + '.');


/* otra forma de concatenar */
console.log (`Mi nombre completo es ${nombre} ${apellido} y vivo en ${provincia}.`);


/* hacer cuentas (+ - * / %) */
let nacimiento = 2002;
let papas = 1965;

diferencia = nacimiento - papas;
console.log (diferencia);
console.log (`======================ESTA ES UNA RESTA========================`);

diferencia = nacimiento + papas;
console.log (diferencia)
console.log (`======================ESTA ES UNA SUMA========================`);


diferencia = nacimiento / papas;
console.log (diferencia)
console.log (`======================ESTA ES UNA DIVISION========================`);


diferencia = nacimiento * papas;
console.log (diferencia)
console.log (`======================ESTA ES UNA MULTIPLICACION========================`);



/* Operadores Relacionales (< > != ! == === ) */

let edad = 18;


/* Condicionales: if */
if (edad < 18) {
    console.log ('1. No puedes comprar una bebida')
}

if (edad > 18) {
    console.log ('2. Puedes commprar bebidas')
}

if (edad >= 18) {
    console.log ('3. Puedes comprar una bebida')
}

if (edad <= 18) {
    console.log ('4. No puedes comprar una bebida')
}

if (edad === 18) { //se recomienda usar siempre ===
    console.log ('5. Tenes 18 años')
}


/* Operadores Lógicos (&& ||(ALT+1) ) */
let cliente = true;
let pagoAlDia = false;
let dia = 'viernes';

//    false      false = false
if (!cliente && dia === 'lunes') {
    console.log('Lo sentimos no tenemos ninguna oferta para usted.');
}

//    true      false = false
if (cliente && dia === 'lunes') {
    console.log('Por ser cliente le otorgamos el 50%.');
}

//   true       true = true
if (cliente && dia === 'viernes') {
    console.log('Por ser cliente y por ser viernes, le otorgamos el 75%.');
}

console.log('=================================================');
console.log('=================================================');

//   false       false             false
if (!cliente || dia === 'lunes' || pagoAlDia) {
    console.log('Lo sentimos no tenemos ninguna oferta para usted.');
}

//   true         false            false
if (cliente || dia === 'lunes' || pagoAlDia) {
    console.log('Por ser cliente le otorgamos el 50%.');
}

//   true         true
if (cliente || dia === 'viernes') {
    console.log('Por ser cliente y estar al dia le otorgamos el 75%.');
}

console.log('=================================================');
console.log('=================================================');

let password = 123456789;
let usuario = 'Pepe';
let facial = false;

if (usuario == "Pepe" && password === 123456789) {
    console.log('Bienvenido Pepe al sistema.');
}
// se va a otra página


if (usuario == "Pepe" || password == 7123456151789 || facial) {
    console.log('Bienvenido Pepe al sistema.');
}
// tambien se iria a otra pagina, por lo tanto, para login hay que hacerlos con &&, ya que tienen que ser todos los datos 100% true.

console.log('=================================================');
console.log('=================================================');

if (usuario == 'Pepe' && password == 1234567891) {
    console.log('Bienvenido al sistema Pepe.');
} else { //si no se cumple...
    console.log('Usuario o contraseña incorrecto.');
}

console.log('=================================================');
console.log('=================================================');


true == 'true' //false
true == 1 // true
true == '1' //true


console.log('=================================================');
console.log('=================================================');


//Arrays
//indice         0          1         2        3
let frutas = ['banana', 'manzana', 'pera', 'durazno']
let persona = ['Pepe', 'Concordia 2743', '1B', 44160869, ['Juan', 'Joaco'], true]

//acceso al array - todos los elementos:
console.log(frutas);
console.log('=================================================');
console.log(persona);


//acceso al elemento por su indice:
//muestro manzana
console.log('El elemento del indice 1 es: ' + frutas [1]);

console.log('=================================================');


//acceso al elemento por su indice:
//muestro Joaco

console.log(persona [5][1]);

console.log('=================================================');
console.log('=================================================');


//bucles: pequeñas estructuras repetitivas de código.

//       inicio        final/limite        paso
for (let index = 0; index < array.length; index++) {
    //codigo para repetir siempre que sea TRUE
    const element = array[index];
}

// i = index
for (let i = 0; i < 10; i++) {
    console.log('Estamos contando de 0 a 9: ' + i);
    //no me imprime el 10, xq 10 no es < que 10
}

console.log('============================================================================');
console.log('============================================================================');


//para que me diga cuantos elementos hay en el array (.length)
console.log(persona.length);

console.log('============================================================================');

//para que me los muestre 1x1
for (let i = 0; i < persona.length; i++) {
    console.log(`Los elementos de persona son: ${persona[i]}`)
}


console.log('============================================================================');
console.log('============================================================================');

//introducir datos en un array
let alumnos = []
let data = prompt ('Introduce un/a alumno/a: ')

//funcion para agregar datos a un array - push
//ejemplo
if (!data) {
    alert ('No se introdujo ningun dato')
} else {
    alumnos.push(data)
    alert (`Ingresamos el alumno ${data} al array alumnos.`)
}

console.log(alumnos);


console.log('============================================================================');
console.log('============================================================================');