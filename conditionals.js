// var age = parseInt(prompt("What's your age"));

// if (age < 18) {
//     alert("You're too young!");
// } else if (age < 30) {
//     alert("You're a young adult");
// } else if (age < 50) {
//     alert("you're adult");
// } else {
//     alert("You're an old man");
// }

// var number = ((Math.random() * 100) + 1);

// function identifier(number) {
//     if (number%2 === 0) {
//         alert("par");
//     } else {
//         alert("impar");
//     }
// }

// identifier()

// var cars = ['BMW', 'Mercedes', 'Ferrari'];

// console.log(cars)

// for (i = 0; i < cars.length; i++) {
//     console.log (cars[i]);  
// }

// var person = {first_name: "Jhon", last_name: "Arias", age: 18};

// for (x in person) {
//     console.log(x +': ' + person[x]);
// }

// var array = [1, 'Pedro', true, false, 'Juan'];

// array.splice(3, 0, "Jhon", 10);
// array.splice(2,1);

// console.log(array);

// var array1 = [1, 2, 3, 4, 5, 6]

// function suma(a) {
//     console.log(
//         a.reduce((a,b) => a + b, 0)
//     )
// }
// suma(array1)


// var string = "Testing strings in JS can be funny as fuck"

// function longest(a) {
//     console.log(
        
//     )    
// }

// string(array2)

function order(arr, reverse) {
    if (reverse == true) {
        arr.sort();
    } else {
        arr.reverse();
        
    }
}

console.log(order([1,9,7,6], false))
