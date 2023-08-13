// here is all concept of this keyword 
// this keyword is a confusing part of javascript because its dynamic nature and this keyword gives output based of different calling style  let see 
// when this call inside the normal function then it refer to the global object 
const numbers = [10, 15, 20, 25];

const average = numbers.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);

console.log(average); // Outputs: 17.5




