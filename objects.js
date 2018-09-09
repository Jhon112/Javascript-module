// OBJETO TOTAL

// var personaLitaral = {
//     nombre: "Jose literal",
//     apellido: "vasquez",
//     edad: 20,
//     saluda: function () {
//         return "Hola soy " + this.nombre;
//     }
// }
// console.log (personaLitaral.saluda())

// };
// // FUNCION CONSTRUCTORA
// var Persona = function (nombre, apellido, age) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.age = age;
//     this.saluda = function (nombre2) {
//         console.log("hola " + nombre2 + " soy " + this.nombre);
//     };

// };

// Persona.prototype.age = 0;
// Persona.prototype.growUp = function (age) {
//     return  this.age += age
// }

// var jhon = new Persona("Jhon", "Arias");
// console.log(jhon.growUp(11));
// console.log(jhon.growUp(3));







// // function printObject(obj) {
// //     for (var key in obj) {
// //             console.log (key + ": " + obj[key]);
            
    
// //     }
// // }

// // var carProperties = {
// //     brand: "Toyota",
// //     model: "2016",
// //     cc: 150,
// //     velocidadInicial: 0,
// //     velocidadActual: 0;
// //     accelerate: function () {
// //             return velocidadActual= this.velocidad * 0.34%;
    
// //     }
// // }

// // var Car = function name(params) {
    
// // }

// //Funcion que return par o impar

// // var isPar = function (number) {
// //     if (number < 0) {
// //         number = Math.abs(number); 
// //     } 
// //     if (number === 0){
// //         return true;
// //     } else if (number === 1) {
// //         return false;
// //     } else {
// //         number = number - 2;
// //         return isPar(number);
// //     }           
// // }

// // console.log(isPar(20))
// // // Funcion que sume los elementos de un array

// // var array_sum = function (my_array) {
// //     if (my_array.length === 1) {
// //         return  my_array[0];
// //     } else {
// //         return my_array.pop() + array_sum(my_array);
// //     }
// // };

// function compose(a, b) {
//     return b(a());
// }

// var greet = function () {
//     return "Bienvenidos";
// };
// var yell = function (str) {
//     return str.toUpperCase() + "!";
// };
// console.log(compose(greet, yell));


// var maria = {
//     nombre: "Terah",
//     edad: 32,
//     altura: 1.70,
//     peso: 60,
//     colorPelo: "cafe",
//     hijos: {
//         german: {
//             nombre: "German"
//         }
//     },
//     bmi: function () {
//             return this.peso / (this.altura * this.altura)
//     },
// }

// console.log(maria.bmi())