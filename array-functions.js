// // return a modified array

// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function (x) {
//     return x * 2;
// })

// // return a word 
// var words = ["Spray", 'limit', 'elite', 'proud', 'fire'];
// var result = words.filter(word = word.length > 6);

// var array1 = ['a', 'b', 'c'];

// array1.forEach(function (element) {
//     console.log(element);
// });

// var euros = [30, 30, 30];
// var sum = euros.reduce((total, amount) => total + (amount*3));
// console.log(sum);

// var posts = [
//     { id: 1, upVotes: 2 },
//     {id: 2, upVotes: 89},
//     { id: 3, upVotes: 1 },    
// ];
// var totalUpvotes = posts.reduce((totalUpvotes, currentPosts) =>

// contruya un objeto literal agenda y escriba una funcion que le permita consultar un telefono 
// apartir del nombre

// var agenda = [
//     { nombre: "Jhon", telefono: "2896364" },
//     { nombre: "Pedro", telefono: "225369" },
//     {nombre: "Leidy", telefono: "5556545"},
// ];

// var search= function (agenda, nombre) {
//     var contact = agenda.find(p => p.nombre === nombre);
//     console.log(contact.telefono)
// };

// search(agenda, "Jhon")

// // escriba una funcion constructiora que tenga los siguientes atributos
// // numbers (array)
// // addNumber(funcion): permite agregar contactos a numbers
// // findNumber(funcion): permite buscar contactos a partir del numbers


// function Agenda() {
//     this.agenda = [];
//     this.addNumber = function (contact) {
//         this.agenda.push(contact);
//     }
//     this.buscar = function (telefono) {
//        return this.agenda.find(function (contact) {
//             return contact.telefono === telefono;
//        });
//     };
// }

// a1 = new Agenda();

// a1.addNumber({ nombre: "Jhon", telefono: "2896364" });
// a1.addNumber({ nombre: "Leidy", telefono: "55552025" });

// (a1.buscar("55552025"))

// Escriba una funcion constructora EComercio que tenga productos,
// que se le puedan agregar productos(id, nombre, precio, categoria,cantidad)
// una funcion que retorne los productos  de una categoria particular.(filter)
// una funcion que retorne el valor total del inventario (reduce)

function EComercio() {
    this.products = []
    this.addProducts = function (product) {
        this.products.push(product);
    }
    this.filter = function (category) {
        return this.products.filter( function (product) {
           return product = product.category === category            
        });
    };

    this.total = function () {
        return this.products.reduce ((totalCantidad, currentProduct) => totalCantidad + (currentProduct.price * currentProduct.cantidad),0);            
    };
}


e1 = new EComercio();
e1.addProducts({id: 1, name: "Hamburgesa", price: 10000, category: "Food", cantidad: 10});
e1.addProducts({id: 2, name: "Perro", price: 6000, category: "Food", cantidad: 30});
e1.addProducts({id: 3, name: "TV", price: 1200000, category: "Electrodomestics", cantidad: 100});
e1.addProducts({id: 4, name: "Radio", price: 300000, category: "Electrodomestics", cantidad: 200});

console.log(e1.filter("Electrodomestics"));
console.log(e1.total());

