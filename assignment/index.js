/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

const fizzBuzz = (number)=>{
    if(number % 5 === 0 && number % 3 === 0){
        console.log("FizzBuzz");
    }else if(number % 3 === 0){
        console.log("Fizz");
    }else if(number % 5 === 0){
        console.log("Buzz");
    }else{
        console.log("Pop")
    }        
}

    fizzBuzz(49); //Pop
    fizzBuzz(55); //Buzz
    fizzBuzz(120); //FizzBuzz
    fizzBuzz(9999); //Fizz



/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
//let result = averager(prices);
//console.log(result);

const averager = (array)=>{

    let sum = 0;
    array.map((number)=>{
        sum = sum + number;
    })

    let average = sum / array.length;
    let rounded = average.toFixed(3);

    console.log("Average is: " + rounded);
}

averager(prices);


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

const celToFah = (celsius)=>{

    let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
    console.log(`${celsius} degrees in Celsius equals ${fahrenheit} in Fahrenheit`)
}

const celToKel = (celsius)=>{
    let kelvin = (celsius + 273.15).toFixed(2);
    console.log(`${celsius} degrees in Celsius equals ${kelvin} in Kelvin`)
}

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);



/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

const pow = (num1, num2)=>{
    let result = 1;
    for(let i = 0; i < num2; i++){
        result = result * num1;
    }
    console.log(`The result of the power value of ${num1} and ${num2} is ${result}`);
}

pow(2,3);
pow(16,8);
pow(2,8);