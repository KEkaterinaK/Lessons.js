// console.log("Hello QA!")

// for (let i = 0; i < 3; i++){
//     console.log(i);
// }

// let i
// for (let i = 0; i < 3; i+= 3){
//    console.log(i);
// }

// let str = "Hello";
// let newStr = "";
// for (let i = 1; i < 7; i++) {
//     newStr = newStr + str;
//     console.log(newStr);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//    sum = sum + i;
//     console.log(sum);
// }

// let num = 5;
// let result = 1;
// for (let i = 1; i <= 3; i++) {
//     result = result * num;

// }
// console.log (result);

// let str = "JavaScript";


// const arr = [];
// let arr = [];
// console.log();

// const arr1 = ['a', 'b'];
// console.log(arr1);

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// // index:          0    1   2   3      4   5   6
// // or:                               -3   -2  -1

// // console.log(letters.length); //количество элементов в массиве
// // console.log(length[0]);
// // console.log(letters [6]);  =  console.log(letters [letters.length -1]);
// console.log(letters.at(-2));

//  let arr = [1, "apple", null, 4, undefined];
// // // index    0   1   2    3   4 
// // // arr.length = 0

// // console.log(arr[4]);

// // // const arr1 = [1, 2, null, 'string'];

// // console.log(arr[arr.length - 1]);
// //     console.log(arr.at(-1));

// let newNum = 2;


// while (newNum < arr.length) {
// newNum++;

// console.log(newNum, ' ', arr[newNum]);

// }
// console.log(newNum);
// console.log('End');

// let arr = [1, "apple", null, 4, undefined];

// let i = 0;

// do {

// console.log(i)
// i++
     
// }  while(i < 5);

// let arr = [1, "apple", null, 4, undefined];

// // for (block1, block2, block3) {

// // }

// let str = "Hello";
// let sum = 0;

// for (let i = 0; i < str,length; i++) {
// if (str[i] == 'l') {
//     sum++
// }

// }
// console.log(sum);
// // console.log(summ);

// function countSheep(num) {
//     let res = 0;
//     for (let i = 1; i <= num;  i++) {
//       res = res + i + ' ' + 'sheep...';
//     }
//      console.log(res);
//   } 

//   var countSheep = function (num){
//     let empty = "";
//      for (let i = 1 ; i <= num ; i++){
//       empty = empty + i + " sheep..." ; 
//     }
//     return empty
      
//     }
    

// Заполнить массив числами от 0 до 20 включительно, за исключением чисел,     кратных 5 (using continue)

// const arr = [];
// let x = 0;
//     for (i = 0; i <= 20; i++) {
//         if (i %5 != 0) {
//             arr [x] = i;
//             x++;
//         }
//     }
// console.log(arr);

// Тоже самое

// const arr = [];

// for (let i = 0; i <= 20; i++){
//     if (i % 5 != 0){
//       arr.push(i);  
//     } 
// }
// console.log (arr)


//  У вас 


// let str = [ '(', ')', '(', ')', ')'];
// let sum1 = 0;

// for (i = 0; i < str.length; i++){
//   if ( str[i] == '(' && str[++i] == ')' ) {
//     sum1 = sum1 + 1;
//     console.log(  sum1 + " скобки закрыты")}
//   else {console.log( (sum1+1) + " скобки не закрыты")}
//   }


// let num = 3;
// if (num == 3) {
//     console.log('Yes') }
//      else {
//       console.log('No')
//         }

// console.log(num == 3 ? 'Yes' : 'No')
// ? - тернарный оператор
// i++ инкримент


// for (let i = 0; i < 10; i++) {
//     console.log (i);
//     console.log("")
// }

// сумма всех чисел из 2х массивов 
// let arr = [1, 2, 10, -5, 7, 25, 100, 98 ];
// let arr2 =  [25, 56, 1, 25, 7, 78, 98, 33];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum 
//     += arr[i] + arr2 [2];

// }
// console.log(sum);

//  OR
// let arr = [1, 2, 10, -5, 7, 25, 100, 98, 15 ];
// let arr2 =  [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for (let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//     sum += arr2[i - arr.length];

// }
// console.log(sum);


// Сложение 2х массивов
// let arr = [1, 2, 10, -5, 7, 25, 100, 98, 15];
// let arr2 = [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for (let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//         sum += arr[i];
//     } else {
//         sum += arr2[i - arr.length];
//     }
// }

// console.log(sum);
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     sum1 += arr2[i];
// }
//  console.log(sum1)


