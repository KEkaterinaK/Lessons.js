// function greet(name) {
//     return "Hello, " + name + " Have a nice day!"
// }
// console.log(greet("Katie"))

// function calculator( a, b, operator) {
//     if (operator == "+") {
//     return a + b
// }
//     if (operator == "-") {
//     return a - b
// }
//     if (operator == "*") {
//     return a * b
// }
//     if (operator == "/") {
//         if (b !== 0)
//     return a / b
// }
// }
// console.log(calculator(5, 7, "*"))

// // Сосчитать количество простых чисел в массиве
// function isPrime (num) {
//     if (num > 1){
//     for(let i = 2; i < num; i++){
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
//     }
//     return false;
// }
// console.log(isPrime(7));      
// // => true
// console.log(isPrime(4));     
// // => false
// console.log(isPrime(1));     
// // => true
// console.log(isPrime(2));    
// //  => true
// console.log(isPrime(12));    
// // => false


// let string1 = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'
// string1 = string1.split('br');
// console.log(string1);
// console.log(string1.join(''));


// Вывести не четные числа
// for (b = 1; b <= 10; b++) {
//     if(b % 2) {
//         console.log(b);
// }   
// }

// Все четные числа возвести во 2 степень добавить длину arr
// const arr = [-1, -8, -9, -2, 0, -5];
// const changeSigh = el => console.log(-el)
// arr.forEach((el, i, newArr) => i % 2 != 0 ? console.log((el ** 2) + newArr.length) : console.log(" "));

// Возвращает массив по алфавиту   .sort()

// const arr = ["Anna", "Steve", "Jane", "Serg"]

// console.log(arr.sort())

// Возвращает массив в обратном порядке по алфавиту   .reverse()
// const arr = ["Anna", "Steve", "Jane", "Serg"]

// console.log(arr.sort() .reverse())

// Отсортировать от меньшего к большему             если от большего к меньшему b -a

// const arr = ["Anna", "Steve", "Jane", "Serg"]
// const arrNum = [1, 30, 23, 24, 65, 10, 9, 3, 2]

// console.log(arrNum.sort((a,b) => a - b))

// // .map() получить длину каждого элемента
// const arr = ["JavaScript", "Java", "Python", "English", "SQL"]
// console.log(arr.map(el => el.length))

// .map()  // [ '**JavaScript**', 'Java', 'Python', 'English', '**SQL**' ]
// const arr = ["JavaScript", "Java", "Python", "English", "SQL"]
// console.log(arr.map((el, i, arr) => i == 0 || i == (arr.length - 1) ? `**${el}**` : el));


// Выведет // [ 1, 9, 36, 64 ]
// const arr = ["JavaScript", "Java", "Python", "English", "SQL"];
// const arrNum = [1, 3, 6, 8];

// const newArr = arrNum.map(item => item ** 2);
// console.log(newArr);\

//  .reduce((accumulator, el, index, array) => {...}, [initial value])  обрабатывает слева направо
// .reduceRight()   обрабатывает справа налева
// получить сумму элементов массива
// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = arrNum.reduce((sum, el) => sum + el, 0);
// console.log(result); 


//  посчитать среднее значение
// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arrNum.length; i++) {
//     sum += arrNum[i];
// }
// console.log(sum / arrNum.length);
// // OR
// console.log(arrNum.reduce((acc, el) => acc + el, 0) / arrNum.length);

// Array.from()   fill - заполнить
// const arr = Array.from(Array(20));
// or
// const arr = Array.from(Array(20).fill("str"));
// or
// const arr = Array.from(Array(n + 1).keys());
// const arr = Array.from(Array(finish - start + 1).fill(start)).map ((el, i) => el + i);
// console.log(arr);


//Array.of()   - выведет (конструктор) массив
// const arr = Array.of(10, 15, 34, 76, "Anna", null, NaN);
// console.log(arr);

// const arr = Array.from(Array(n + 1).keys());

// Array.isArray()
// let arr = Array.of(10, 15, 34, 76, "Anna", null, NaN);
// console.log(arr);
// arr = true;

// console.log(Array.isArray(arr));




// const str = 'Hello, my deear friend. You ar the best';
// let count = 0;
// let sition = str.indexOf('e')

// while (posiyion !== -1)
//     count++;
//     position = str.indexOf('e')



// let arr = [28];

// let min = Math.min(...arr);
// let newMin = Math.min()
// let max = Math.max(...arr);

// Math.pow(num, power)
// console.log(Math,pow(2,4));
// console.log(2 ** 4);

// Округление
// Math.round(), Math.floor(num)

// в меньшую сторону
// let num = 0.2355454;
// console.log(Math.floorloor(num));

// // в большую сторону
// console.log(Math.cell(num));

// // округление по математике
// console.log(Math.round(num));

// // отбрасывает дробную часть
// console.log(Math.trunc(num));

// обоезает по количеству цифр после запятой и последнее округлянтся по-математике
// .toFixed(NUM)
// console.log(num.toFixed(3));

// console.log(Math.sign(num));

//  бесконечность
// NaN
// console.log(-545 / "a");

// console.log(isFinity(-545/"5a"));