do {
    arrayLength = parseInt(prompt('Enter array`s length please?').trim());
} while (!arrayLength || isNaN(arrayLength));

arrayWithValuesFromUser = [];

for (i = 1; i <= arrayLength; i++) {
    value = prompt(`Enter the ${i}\'st value please?`);
    arrayWithValuesFromUser.push(value);
}

// 1

console.log(arrayWithValuesFromUser);

// 2

console.log(arrayWithValuesFromUser.sort());

// 3

arrayWithValuesFromUser.splice(1, 3);
console.log(arrayWithValuesFromUser);
