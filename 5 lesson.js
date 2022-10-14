// let i = 0
// while (i < 3) {
// console.log(i);
// i++
// }

// let j = 7
// while (j != 0) {
//     console.log(j);
//     j--
// }

// const fruits = ['apple', 'pears', 'plums', 'grape']
// let index = 0
// while (index < fruits.length) {
//     console.log(fruits[index])
//     index++
// }

// let k = 0;
// do {
// console.log(k);
// k++
// } while (k > 3);

// break - полностью прекращает  выполнение цикла
// continue - прерывает текущую итерацию циклов и продолжает выполнение циела со следующей итерации

// for (let i = 0; i <= 10; i++) {
//     if (i == 7) break;
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i %2 == 0) continue;
//     console.log(i);
// }

// Тернарный оператор - ternary operator
// let a = 7;
// (a < 5) ? console.log(a) : console.log("Hi");


//  1
// 12
// 123
// 1234
// 12345
// let str = "";
// for (let line = 1; line <= 5; line ++) {


//     str = str + line
//     console.log(str);
// }


// 12345
// let str = "";
// for (let line = 1; line <= 5; line ++) {


//     str = str + line
 
// }
// console.log(str);

// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let line = 1; line <= 5; line++) { 
//     let str = "";
//     for(let numInLine = 1; numInLine <= numInLine; numInLine++) {
//         str += numInLine
//     }
//     console.log(str);
// }


// 12345
// 1234
// 123
// 12
// 1
// for (let i = 5; i >= 1; i--) {
//     // отвечает за колво строк  
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         // отвечает за наполнение строки
//         str = str + j;
//     }
//     console.log(str);
// }

// if (i == 2) continue;
// как достать элемент из вложенного массива

// let arr = [1, ["a", 'b',[5, 7]], 3, "Hello"]
//             // 0  ---------------    2      3
//             //             1
//             //     0       1       ---
//             //                     2
//             //                   0   1
// console.log(arr [3] [2])
// // как проверить пустой массив

// let arr2 = []
//     if (arr2.length == 0) {
//         console.log("it's empty")
//     }

// let str = "Hello world, my name is Katie";
// let result = [];
// let result2 = [];
// for (let i= 0; i < result.length; i++) {
//     result [i] = str[i].charCodeAt();
// }
// console.log(result);
// for(let i = 0; i < result.length; i++) {
//     result2 += String
// }


// function code (arr) {
//     return arr.length;

// }
// const arr =  [];
// console.log (code(arr));

// function code (arr) {
//     if (arr == null){
//         return -1;
//     }
// }
// console.log (code(arr));


// сортировка массива
// const arr = [10, 2, 4, 67, 97, 139, 3, 7];

// for (let i = 0; i < arr.length -1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr [i] > arr [j]) {
//             let temp = arr[i];
//             arr[i] = arr [j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log (arr);
// console.log(arr[arr.length -1]);
// console.log(arr[arr.length -2]);



// Вывести:
// 1
// 12
// 123
// 1234
// 12345
// let n = 5;
// let str = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j ++) {
//         str += j;
//     //    если поменять j на * или 1 или еще что-то, будет вывод *, 1...(str += j;)

//     }
//     str += '\n';
// }
// console.log (str);

// 1
// 12
// 123
// 1234
// 12345
//     let n = 5;
//     let str = '';
// for (let i = 1; i <= n; i++) {
//     str += " ".repeat (n - i)
//         for (let j = 1; j <= i; j ++) {
//             str += j;
//         //    если поменять j на * или 1 или еще что-то, будет вывод *, 1...(str += j;)
    
//         }
//         str += '\n';
//     }
//     console.log (str);

//     let n = 5;
//     let str = '';
// for (let i = 1; i <= n; i++) {
//     str += " ".repeat (n - i)
//         for (let j = 1; j <= i; j ++) {
//             str += j;
//     for (let j = i; j >= 1; j--) {
//         str += j;
//     }
//       str += '\n';
       
//     }
// }
//     console.log (str);


// Вывод
// [ 1, 2, null, undefined, true, 'c' ]
// papac
// abc
// let arr = ['mama', 'my', [1, 2, null, undefined, true, 'c'], 'papac', 'abc'];

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] == 'c'){
//             console.log(arr[i]);
//         }
//     }
// }


// 0.0
// 0.1
// 0.2
// 1.0
// 1.1
// 1.2
// 2.0
// 2.1
// 2.2
// 3.0
// 3.1
// 3.2
// 4.0
// 4.1
// 4.2
// 5.0
// 5.1
// 5.2
// let column = 5
// let row = 3

// for(let i = 0; i <= column; i++){
//     for(let j = 0; j < row; j++){
//         console.log(i +'.' +j)

//     }
// }

