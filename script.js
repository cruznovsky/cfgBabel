// Zadanie 1

const hello = 'Hello';
const world = 'World';

console.log(`${hello} ${world}`);


// Zadanie 2

let multiply = (a = 1, b = 1) => {
    return a * b;
}

console.log(multiply(34));


// Zadanie 3

let average = (...numbers) => {

    let sum = 0;
    let numLength = numbers.length;

    for (let num of numbers) {
        sum += num;
    }

    return sum / numLength;

}

console.log(average(2, 4, 5, 6, 4, 3));

// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));


// Zadanie 5

let table = [1, 4, 'Iwona', false, 'Nowak'];

const [num1, num2, firstName, x, lastName] = table;

console.log(firstName);
console.log(lastName);
