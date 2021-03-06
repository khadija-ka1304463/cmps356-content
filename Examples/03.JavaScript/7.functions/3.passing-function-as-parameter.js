function square(x) {
    return x * x;
}

let display = (x) => {
    console.log(x);
}

display('Cool!');

//Map applies a function to every element of the array
let numbers  = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map( square );

squares.forEach( display );


//2nd way
squares = numbers.map(function(x) {
    return x * x;
});

//3rd way using arrow functions
squares = numbers.map(x => x * x);

let roots = numbers.map(Math.sqrt);

console.log('num - square - sqrt ');
for (let index in numbers) {
    console.log(numbers[index] + ' - ' + squares[index] + ' - ' + roots[index])
}

function logArrayElement(element, index) {
    console.log("a[" + index + "] = " + element);
}

//Similar to map method 
[2, 5, 9].forEach(logArrayElement);

//reduce method can be used to arrgegate the elements of the array
let total = [0, 1, 2, 3].reduce(function(total, e) {
    return total + e;
});
console.log('Total = ' , total); // total == 6

//Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});

//Concatenate the elements of an array
console.log('flattened ', flattened.join(', ')); // flattened is [0, 1, 2, 3, 4, 5]


