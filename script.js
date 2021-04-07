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

// 10 задание

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