/*
  Title:
  Alternate case
  Description:
  Напишите функцию alternateCase, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.
  Examples:
  Hello World -> hELLO wORLD
*/
 
 
const alternateCase = str => {
    let characters = str.split("");
    return characters.map(character => {
        return character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    }).join("");
}

console.log(alternateCase("Hello World"));
