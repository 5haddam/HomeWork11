do {
    arrayLength = parseInt(prompt('Enter array`s length please?'));
} while (isNaN(arrayLength) || arrayLength <=0);

arrayWithValuesFromUser = [];

for (i = 1; i <= arrayLength; i++) {
    value = prompt(`Enter the ${i}\'st value please?`);
    arrayWithValuesFromUser.push(value);
}

// 1

console.log(arrayWithValuesFromUser);

// 2

for (i = 0; i < arrayWithValuesFromUser.length; i++) {
    for (j = 0; j < arrayWithValuesFromUser.length - i - 1; j++) {
        if (arrayWithValuesFromUser[j] > arrayWithValuesFromUser[j + 1]) {
            valueWithIndexPlusOne = arrayWithValuesFromUser[j];
            arrayWithValuesFromUser[j] = arrayWithValuesFromUser[j + 1];
            arrayWithValuesFromUser[j + 1] = valueWithIndexPlusOne;
        }
    }
}

console.log(arrayWithValuesFromUser);

// 3

arrayWithValuesFromUser.splice(1, 3);
console.log(arrayWithValuesFromUser);
