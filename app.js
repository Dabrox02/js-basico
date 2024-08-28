// FUNCION DE SALIDA
console.log("Hola Mundo Javascript");

/* 1. SE pueden iniciar sin usar LET, VAR, O CONST*/
/* BAD PRACTICE */
precio = 3000;
console.log(precio);
/* 2. No declarar variables comenzando con numeros */
nombre = "juan"


/* 3. DEFINIR CON LET */ /* Permite cambiar valores - Asignacion dinamica */
let saldo = 10;
console.log(saldo);
saldo = 500;
console.log(saldo);
saldo = "carlos"
console.log(saldo);

/* 4. Usando LET se puede definir variable sin asignar valor */
let edad;
console.log(edad);

/* 5. DEFINIR CON CONST */ /* No se reasigna variable definida usando CONST */
const salario = 800;
console.log(salario);

/* 6. Usando CONST "NO" se puede definir variable sin asignar valor */
const ventas = 200;
/* 7. estilo y estandar codigo en JavaScript - CAMELCASE */
let cuentaCorriente = 200;


/* ----------------
    TIPOS DE DATOS JAVASCRIPT
--------------- */
/*8. Undefined */
let precios;
console.log(typeof precios);

/* 9. Number */
let compras = 700;
console.log(compras);
console.log(typeof compras);

/* 10. Boolean */

let estadoCivil = true;
console.log(estadoCivil);
console.log(typeof (estadoCivil));


/* Strings o cadenas de texto */

let nombre = "jessica"
console.log(nombre);
console.log(typeof nombre);


/** Null */
let valorNull = null

