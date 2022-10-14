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
// continue - прерывает текущую итерацию циклов и продолжает выполнение цикла со следующей итерации

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

let str = "Hello world, my name is Katie";
let result = [];
let result2 = [];
for (let i= 0; i < result.length; i++) {
    result [i] = str[i].charCodeAt();
}
console.log(result);
for(let i = 0; i < result.length; i++) {
    result2 += String
}