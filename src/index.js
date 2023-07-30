//Built-in functions
console.log("Hello World");

let arr1 = ["John", "Paul", "George", "Ringo"];
console.log(arr1.toString());

console.log(Math.sqrt(121));

//User-defined functions
function multiplyNumbers(a, b){
    // console.log(a * b);
    return (a * b);
}

console.log(multiplyNumbers(30, 123));

let x = 9;
let y = 7;
let product = multiplyNumbers(x, y);
console.log(`The result of ${x} multiplied by ${y} is ${product}`);

//Object methods
const pet = {
    name: "Cody",
    species: "Dog",
    greet: function(){
        console.log(`Hi, my name is ${this.name}!`);
    },
    eat: function(food){
        console.log(`Thank you! I love eating ${food}`);
    }
}

pet.greet();
pet.eat("beef");