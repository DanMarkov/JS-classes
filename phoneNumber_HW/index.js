// Title:
// Create Phone Number
// Description:
// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// */

const createPhoneNumber = (numbers) => {
    //return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;
    let template = '(xxx) xxx-xxxx';
    numbers.forEach(number => {
        template = template.replace('x', number);
    });
    return template;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
