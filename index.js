//RESUELVE LOS EJERCICIOS AQUÍ
//destructuring-spread-rest

//1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [{  email: correo },{ name: nombre2, email: correo2 }] = empleados;
console.log(`{Nombre: ${nombre2}, email: ${correo2}}`);

//2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com
const [{ email: email }] = empleados;

console.log(`\n${email}`);


//3.- Usa destructuración para cambiar los valores de a y b;
// Inicialmente
let a = 5;
let b = 3;
console.log(`\nValor inicial \na = ${a} \nb = ${b}`);
[a, b] = [b, a];
console.log(`Valor Final \na = ${a} \nb = ${b}`);


//4.- Dado el objeto **HIGH_TEMPERATURES**
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(`\n{today:${maximaHoy}, tomorrow:${maximaManana}}`);


/*  5.- Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números 
y devuelva la suma de todos los demás argumentos. */
/* sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 */

function sumEveryOther(...n){
    let suma = n.reduce((a, b) => a + b);
    return suma;
}
/* function sumEveryOther(...n){
    let suma = 0;
    n.forEach((index)=>{
       suma = suma + index; 
    })
    return suma;
} */
console.log(sumEveryOther(10,20,30,10));


/* 6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos 
(incluyendo números y strings y retorne la suma solo de los números). */

function addOnlyNums(...n) {
  let suma = n.reduce((a, b) => (typeof b === "number" ? a + b : a));
  return suma;
}

/* function addOnlyNums(...n){
    let suma = 0;
    n.forEach((i)=>{
          if (typeof i === "number") suma += i;
    })
  
    return suma;
} */
console.log(addOnlyNums(1, "perro", 2, 4));


/* 7.- Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos
 y devuelva un número que indique cuántos argumentos ha recibido. */

 function countTheArgs(...n) {
   let suma = n.reduce((acumulador, valorActual) => {
     return acumulador += 1;
   }, 0);
   return suma;
 }

 /* function countTheArgs(...n){
    let contador = 0;
    n.forEach(()=>{
        contador += 1;
    })
    return contador;
 } */
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

/* 8.- Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos 
y devuelva solo un array que combine los dos (usando spread operator). */
let array1 = ["uno", "dos", "tres", "cuatro"];
let array2 = ["cinco", "seis", "siete", "ocho", "nueve", "dies"];

function combineTwoArrays(array, array2){
    let array3 = [...array, ...array2];
    return array3;
}
/* function combineTwoArrays(array, array2) {
  let array3 = array.concat(array2);
  return array3;
} */
console.log(combineTwoArrays(array1,array2));

/*  9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos 
y devuelva un array de elementos únicos, sin repetidos. */

/* function onlyUniques(...array){
    return [...new Set(array)]; //elimina duplicados
} */
function onlyUniques(...array){
    let unicos = [];
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        let yaEsta = false;
        for (let j = 0; j < unicos.length; j++) {
          if (unicos[j] === elemento) {
            yaEsta = true;
          }
        }
        if (!yaEsta) unicos.push(elemento);
    }
    
    return unicos;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));

/* 10.- Escriba una función llamada **combineAllArrays** que pueda recibir 
cualquier cantidad de arrays como argumentos y los combine todos en un solo array. */

function combineAllArrays(...array){
  let concat = [];
  for(let i=0; i< array.length; i++){
    concat.push(...array[i]);
  }
  return concat;
}
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

/* 11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos, 
los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. */
function sumAndSquare(...array){
  let suma = 0;
  for(let i=0; i<array.length; i++){
    let potencia = array[i] ** 2;
    suma += potencia;
  }
  return suma;
}
console.log(sumAndSquare(40,2,4));//1620