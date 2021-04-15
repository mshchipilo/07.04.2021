// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.
let str1 = 'Привет';
console.log(typeof str1);

let number = 123;
console.log(typeof number);

let flag = true;
console.log(typeof flag);

let txt = "true";
console.log(typeof txt);


// 2.Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3

let a1 = 5+3;
console.log(a1);

let a2 = 5-3;
console.log(a2);

let a3 = 5*3;
console.log(a3);

let a4 = 5/3;
console.log(a4);


// 3.Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'

let a6 = 5%3;
console.log(a6);

let a7 = 3%5;
console.log(a7);

let a8 = 5+'3';
console.log(a8);

let a9 = '5'-3;
console.log(a9);

let a10 = 75+'кг';
console.log(a10);


// 4.Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height),
// шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.

let height = 23;
let width = 10;
let s = 23*10;
console.log(s);


// 5.Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) 
// и диаметром основания 4м (dC),результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let rC = 4/2;
let v = heightC*rC;
console.log(v);


// 6.У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) 
// или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let three = 3**2;
let four = 4**2;
let sum6 = three+four;
console.log(sum6);


// Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5).
// Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.

let s6 = 2000000;
let p = 10;
let years = 5;
let mon = 5*12;
let crd = s6*p*mon;
console.log(crd);


// 1 задача
let str = ['a','b','c'];
let num = [1,2,3];
let sum = str.concat(num);
console.log(sum);

// 2 задача
let str2 = ['a','b','c'];
    str2.push = (1,2,3);
console.log(str2);

// 3 задача
let num3 = [1,2,3];
num3.reverse();
console.log(num3);

// 4 задача
let num4 = [1,2,3,4,5];
let sub4 = num4.slice(0,3);
console.log(sub4);;

// 5 задача
let num5 = [1,2,3,4,5];
let sub5 = num5.slice(2);
console.log(sub5);

// 6 задача
let obj6 = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj6));

// 7 задание
let mas7 = [1,2,3,4,5,6,7,8,9]
console.log(mas7.sort((a,b)=>b-a));

// 8 задание
let mas8 = [[1,2,3,],[4,5],[6]];
let arr8 = mas8.flat();
console.log(arr8)
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr8.reduce(reducer));

// 9 задание
let mas9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum9 = 0;
for (let i = 0; i < mas9.length; i++){
    for (let j = 0; j < mas9[i].length; j++){
        for (let k = 0; k < mas9[i][j]; k++){
            sum += mas9[i][j][k]
        }
    }
}
console.log(sum9)

// 11 задание
let mas11 = [8,9,11,12];
var newMas11 = mas11.map(function(elem) {
	return elem * elem;
});
console.log(newMas11);

// 12 задание
let mas12 = [1,-2,3,-4,-5,6];
let result12 = mas12.filter(function (number) {
    return number < 0
});
console.log(result12);

// 13 задание
let mas13 = [1,2,3,4,5,6,8];
let red13 = (accumulator,currentValue) => accumulator+currentValue;
console.log(mas13.reduce(red13));