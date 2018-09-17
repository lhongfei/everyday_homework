console.log('asdqwe111')
/*
基本数据类型：number，string（字符串）, null, undefined,Boolean(布尔数据)
复杂数据类型：Array(数组),Object(对象),Function(函数),正则，Date（时间）
如何判断
typeof 11
*/
console.log( typeof 123)
console.log(typeof true)// boolean
console.log(typeof 'asdqwe')
console.log(typeof null) // Object 不准确
console.log(typeof ['asd',1,true]) // Object 
console.log(typeof function myfun(e) {console.log(e)}) // function
console.log(typeof /$/) // Object
console.log( typeof new Date() ) // object

var a = 123 // 声明 并 赋值 没有声明会报错， 没有赋值会返回undefined
a = '123asd'
a = true
var A = 'xxx'

console.log(a,A)

var x = 1;
console.log(x)
// x = x+1;
// ++x
x++
console.log(x)
if(x) {// 非0数字，非空字符串，数组，Object，true
x++;
console.log(x)
}
for(var y = 0;y<10;++y) {
    console.log(y,'y')
}
var num1 = 2
var num2 = 20;
var num3 = num1++ + num2
console.log(num3);
console.log(num1)
var age = 30;
age++; // ++age;

var z = {};
var v =z
console.log(z ===v,v,z)
// z.b=2
var m = {}
console.log(z === m)