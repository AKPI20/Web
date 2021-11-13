// Задание №1 (Треугольник)---------------------------------------------------------------------------------
console.log('Number 1------------')
let i1 = "#";
while (i1.length<=7){
    console.log(i1 + "\n");
    i1+="#";
}


// Задание №2 (FizzBuzz)------------------------------------------------------------------------------------
console.log('Number 2------------')
for(let i2 = 1; i2 <= 100; i2++) {
    if (i2 % 3 == 0 && i2 % 5 == 0) { // && для сравнения в виде логического И
        console.log('FizzBuzz')
    } else if(i2 % 3 == 0) {
        console.log('Fizz')
    } else if(i2 % 5 == 0) {
        console.log('Buzz')
    } else console.log(i2);
}


// Задание №3 (Шахматная доска)-----------------------------------------------------------------------------
console.log('Number 3------------')
let chessBoard = ''; // Объявление переменных
let cell = '#';
let space = ' ';
function Chess(i3) {
    for(let i = 2; i <= i3+1; i++) {
        for(let j = 2; j <= i3+1; j++) {
            chessBoard += (i % 2 == j % 2) ? cell : space; // Определяем порядок пробела и #
        }
        console.log(chessBoard+= '\n'); // Переход на новую строку
    }
}
Chess(8);


// Задание №4 (Минимум)-------------------------------------------------------------------------------------
console.log('Number 4------------')
function min(i4, z4){
    if (i4 < z4){
        console.log(i4)
    } else console.log(z4)
}
console.log('Finding minimum while comparing 15 and 2')
min(15, 2)

// Задание №5 (Считаем бобы)--------------------------------------------------------------------------------
console.log('Number 5------------')
function countBs(str, char) {
    let count = 0;
    for(let i = 0; i <= (str.length - 1); i++){
        if(str.charAt(i) == char) {
            ++count;
        } 
    }
    return console.log(`\nString: ${str} 
    \nSymbol: ${char} 
    \nNumber of this type of symb in the str: ${count} `);
}
countBs('There are two a in this str', 'a');


// Задание №6 (Сумма диапазона)----------------------------------------------------------------------------
console.log('Number 6------------')
function range(start, end, step) {
    var i = start,  // var - объявление переменной
    arr = [];
    if (!step) {  // Если параметр не указан, то по умолчанию 1
        step = 1
    }
    if (step < 0) {
        start = end;  // Если шаг с отрицательным значением
        end = i;
    }
    for (; i >= start && i <= end; i += step) {  // Переменнаяя уже объявлена
        arr.push(i);  // push добавляет элементы в конец массива
    }
    return arr;
}

function sum(arr) {
    var counter = arr[0];
    for (var i = arr[0]; i < arr.length; i++) {
        counter += arr[i];
    }
    return counter
}
console.log('Sum of the range(1, 10): '+sum(range(1, 10)));
console.log('Range (5, 2, -1): '+range(5, 2, -1));


// Задание №7 (Обращаем массив вспять)---------------------------------------------------------------------
console.log('Number 7------------')
function reverseArray(array){
    var newArray1 = [];
    for (var i = array.length; i > 0; i--){
        newArray1.push(array.pop());
    }
    return newArray1;
};
  
function reverseArrayInPlace(array){  // Первая часть функции аналогична reverseArray()
    var newArray2 = [];
    for (var i = array.length; i > 0; i--){
        newArray2.push(array.pop());  // pop позволяет удалить последний элемент из массива и возвратить его значение
    }
    for (var j = newArray2.length; j > 0; j--){
        array.unshift(newArray2.pop());   // unshift добавляет элементы в начало массива
    }
    return array;
};
console.log('Reverse of [1, 2, 3] by reverseArray: '+reverseArray([1, 2, 3]));
var array3 = [1, 2, 3]; 
console.log('Reverse of array3=[1, 2, 3] by reverseArrayInPlace: '+reverseArrayInPlace(array3));
