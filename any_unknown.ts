// let myFav: any = 20;

// myFav = "harshit rusia";

// console.log(myFav);

// the unknown type is a safer alternative to any beacause it still enforces type checking and type saftey

// let myFav1 = 55;
// myFav1 = true; // type checking
// myFav1.map(() => {});  // type saftey

let num2: unknown;
num2 = 4;
num2 = "harshit";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

// //////////////////////////

// async function fetchData(): Promise<unknown> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// }

// async function processData() {
//   const response = await fetchData();

//   if (typeof response === "object") {
//     console.log(response);
//   }
// }

// processData();
