// ---------------------Taller en Clase - TypeScript--------------
// David Bravo

// ----------------------------Parte 1: Funciones---------------------

console.log("------------------PARTE 1-----------");

// Número
let numero: number = 10;
console.log(numero);

// Cadena de texto
let cadena: string = "Hola, mundo!";
console.log(cadena);

// Booleano
let booleano: boolean = true;
console.log(booleano);

// Arreglo de números
let arregloNumeros: number[] = [1, 2, 3, 4, 5];
console.log(arregloNumeros);

// Arreglo de cadenas de texto
let arregloCadenas: string[] = ["uno", "dos", "tres"];
console.log(arregloCadenas);

// Objeto
let objeto: { nombre: string; edad: number } = { nombre: "Juan", edad: 30 };
console.log(objeto);

// Función
let funcion: Function = () => {
  console.log("¡Hola, mundo!");
};

// Tipo de datos
interface Persona {
  nombre: string;
  edad: number;
  email?: string;
}

let persona: Persona = {
  nombre: "David",
  edad: 23,
  email: "david@gmail.com",
};

console.log(persona);

// Tipo de datos personalizado
type Resultado = number | string;

let resultado1: Resultado = 10;
let resultado2: Resultado = "Éxito";

console.log(resultado1, resultado2);

// Tipo de datos ANY
let cualquierDato: any = "Juanito estudia programcíon :)";
console.log(cualquierDato);

//---------------Parte 2: Condicionales---------------------

console.log("------------------PARTE 2-----------");
// Funcion para calcular si un estudiante aprueba o desaprueba
function nota(calificacion: number): void {
  if (calificacion < 0 || calificacion > 5) {
    console.log("Ingrese un valor valido ");
  } else if (calificacion >= 2.95) {
    console.log("Felicitaciones aprovo el exmamen con: " + calificacion);
  } else {
    console.log("Perdiste el el examen con: " + calificacion);
  }
}

const alumno1 = 2.95;
const alumno2 = 2.5;
const alumno3 = 4.5;

nota(alumno1);
nota(alumno2);
nota(alumno3);

// ----------------------------Parte 3: Funciones---------------------

console.log("------------------PARTE 3-----------");
function sumar(a: number, b: number): number {
  return a + b;
}

function concatenar(a: string, b: string): string {
  return a + b;
}

function esPar(numero: number): boolean {
  return numero % 2 === 0;
}

console.log(sumar(8, 6));
console.log(concatenar("Hola, ", "mundo!"));
console.log(esPar(7));
console.log(esPar(8));

// Funciones con Parámetros Opcionales y Predeterminados:

function motos(
  marca: string,
  categoria: string = "¡Hola!",
  puntuacion?: string
): void {
  let bike = `${categoria} ${marca}`;
  if (puntuacion) {
    bike += ` ${puntuacion}`;
  }
  console.log(bike);
}

motos("Honda");
motos("Suzuki", "Naked");
motos("Yamaha", "SBK", "★★★★☆");

console.log("FIN DEL TALLER");
