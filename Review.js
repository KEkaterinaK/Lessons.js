// Ромбик
// let row = 10;
// // количество строк
// let str = "";
// // первая строка

// for (let i = 1; i <= row; i++) {
//     str += " ".repeat(row - i);
//     for (let j = 1; j <= i; j++) {
//         str += j % 10;
//     }
//     for(let k = i - 1; k >= 1; k--){
//         str += k % 10;
//     }
//     str += "\n";
// }

// for (let i = row - 1; i >= 1; i--) {
//     str += " ".repeat(row - i);
//     for (let j = 1; j <= i; j++) {
//             str += j % 10;
//      }
//      for(let k = i - 1; k >= 1; k--){
//             str += k % 10;
//     }
//         str += "\n";
// }
// console.log(str);

// let row = 15;
// let str = "";

// for (let i = 0; i < row; i++) {
//     str += "$";
//     for (let j = i; j < row; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         str += "*";
//     }
//     for (let j = i; j < row -1; j++) {
//         str += " ";
//     }
//     str += "$";
//     str += "\n";
// }
// console.log(str);

// let row = 9;
// let str = "";

// for (let i = 1; i <= row; i++) {
//     let num = i;
//     for(let j = 1; j <= i; j++){
//         str += num + " ";
//         num = num + (row - j);
//     }
//     str += "\n"
// }
// console.log(str);


// const arr = [1, 2, 4, 7, 9];

// let newArr = [];
// let index  = 0;

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr[index++] = arr[i];
//     }
//     if (arr[i] == 7){
//     break;
//     }
// }
// console.log(newArr);

// let i = 1000;

// while(i > 1) {
//     console.log(i);
//     i /= 2;
// }

// print("Hi");
function print(arg) {
    console.log(arg);
}
// print([1, 2, 3]);

// function sum(a, b) {
//     // const a = 9;
//     // const b = 4;
    
//     let result = a + b
//     if(a > 0){
//         return result;;
//     } else {
//         return result;
//     }
    
// }
// sum(1,4)

// sum(6,9)

// console.log(sum(1,1))
// let c = sum(5, 5)
// console.log(c);

// let name1 = 'Anna';
// console.log(name1);

// function showMessage() {
//     return name1 = 'Hi' + ' ' + name1;
// }
// console.log(showMessage());
// console.log(name1);

// arrow functions
// let sum = (a, b) => a + b;
// console.log(sum (3, 9));

// let sum = (a, b) => `Your number are: ${a}, ${b} and sum ` + (a + b);
// console.log(sum (3, 9));

// let double = n => n * 2;
// console.log(double (456));

// let sum = (a, b) => {
//     Console.log("good night!") 
//     return `Your number are: ${a}, ${b} and sum ` + (a + b);
// }
// console.log(sum (3, 9));


// let receipt = [order, step1, step2, step3, step4, step5, orPrice, result]

// function showCoffee() {
//     let coffe = ''
//     for( let i = 0; i < receipt.length; i++) {
//         coffee = coffee + receipt[i] + `\n`
//     }
// }
// console.log(coffee)
// showCoffee()


// hoisting - все функции поднимаются в зону видимости
// console.log("1");
// console.log("2");
// console.log("3");
// print();

// function print () {
//     console.log("Hello World!");
// }


// const print = function() {
//     console.log("Hello World!";)
// }


// function checkEven(num) {
//     return num % 2 == 0 ? 'even' : 'odd';
//     // console.log(num % 2 ? false : true);
//     // arr[0] = 2,   2 % 2 = 0,   false
//     // console.log(num % 2 == 0 ? true : false);
// }

// let arr = [2, 4, 5, 7, 10]

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} - ${checkEven(arr[i])}`);
// }

// // checkEven(2);



// let name = "Serj";

// console.log(name);
// let str = printMessage ();
// console.log(str);
// console.log(name);


// function printMessage() {
//     let name = "Anna";
//     return "Hello,  " + name;
// }
// console.log(printMessage());
// console.log(name);



// let num = 10;
// с этой строкой 11; 12; 13

// function count() {
//     // let num = 10;
//     // с этой строкой 11; 11; 11
//     num++
//     console.log(num);
// }

// count();
// count();
// count();

// function sum (num1, num2) {
//     return num1 + num2;

// }

// // console.log(sum(10, 20));
// // console.log(sum(30, 50));

// console.log(sum(10, 20) + sum (30, 50));

// function count(num1, num2, operator) {
//                     // (params)
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//                 break;
//          case "-":
//             result = num1 - num2;
//                 break;
//     }
// }


// console.log(count(10, 20,  "+"));
// //                  (arguments)



// function sum() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// // console.log(sum (10, 20, 30));
// //      OR
// let arr = [10, 20, 30, 40, 50, 60];
// let result = sum(... arr);
// //  operator spred (...)- разворачивает массив без скобок
// result += 1000
// console.log(result);



// function sum (num1, num2) {
//     return num1 + num2;
// }

// const newSum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(sum(10,20));
// console.log(newSum(10,20));

// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.
// The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.
// Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

// Input: heights = [4,2,3,1] Ocean
// Output: [0,2,3]


// function Add(num1, num2) {
// let sum = num1 + num2;
// return sum; 
// }

let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
 const pets = ['cat', 'dog', 'bat'];
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'ty'];

//  function arrLongest (arr) {
//     let longest = arr[0].length;
//     let num = 0;
//        for (let i = 0; i <= arr.length-1; i++) {
//            if (longest < arr[i].length) {
//                longest = arr[i].length
//                num = i;
//            } 
         
//        }
//        return num;
//     } 
   
//     console.log(arrLongest(words));
   


// function findNumbers (arg){
  
//     for(let i = 0; i < arg.length; i++){
//       if(typeof(arg[i]) == 'number')
//       console.log(arg[i]);
//       for(let j = 0; j < arg[i].length; j++){
//       if(typeof(arg[i][j]) == 'number')
//       console.log(arg[i][j]);
  
//       }
  
//     }
  
//   }
//   findNumbers(arr);

