// greet("harshit" , 1); // function invocation
// when ever you call or invoke a function and pass a value is a argument
// when ever you declear a fuction then name , id use as parameter

// function normal

// function greet(name: string, id: number) {
//   console.log(`Hello, ${name} and your id is ${id}`);
// }

// greet("harshit", 1); // function invocation

// with arrow function
// ==> this is fat arraow function
// const greet = (name: string, id: number) => {
//   console.log(`Hello, ${name} and your id is ${id}`);
// };

// greet("harsh", 1);

// function return type

// here is void is to define the type of greet is use show void because
//  we here use console.log that's why here see void

//  otherwise in the place of console.log we use return here then show the
//  return type of greet is string

// function greet(name: string, id: number): void {
//   console.log(`hello ${name} and id ${id}`);
// }

// const greet = (name: string, id: number): string => {
//   return `hello ${name} and id ${id}`;
// };
// const myGreet = greet("harshit", 1);
// console.log(myGreet);

// //////////////////////

// const greet = (name: string, id: number): string =>
//   `hello ${name} and id ${id}`;
// const myGreet = greet("harshit", 1);
// console.log(myGreet);

/////////here we use plaindrome ////////////////

// in this forward and backward is the same

// const isPlaindrome = (plain: string): boolean => {
//   let myPlain = plain.split("").reverse().join("");
//   return myPlain === plain;
// };

// console.log(isPlaindrome("12321"));

///////////// Home work/////////////

// const isCalculateAvg = (arr: number[]): number => {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
//   const average = sum / numbers.length;
//   return average;
// };

// const numbers = [1, 2, 3, 4, 5];

// const average = isCalculateAvg(numbers);
// console.log(average);

/////////////////////find maxvalue////////////

const findMaxValue = (arr: number[]): number => {
  const maxValue = numbers.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
  });
  return maxValue;
};

const numbers = [1, 2, 3, 4, 5];

const max = findMaxValue(numbers);

console.log(max);
