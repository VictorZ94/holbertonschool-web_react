console.log("Hello Typescript");
console.log("Hello Typescript * 2");
// data types
var num = 22;
num++;
console.log(num);
var mystring = "Hello Baby";
console.log(mystring);
var myBoolean = false;
var myVar = "Hello";
myVar = false;
// Array's
var stringArray = ["1", "2", "3"];
var numberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, false];
var anyArray = [1, [2], "hello", false];
//tuples in TS
var strNumTuple;
strNumTuple = ["Hello", 22];
// strNumTuple = ["World", 254, "", 45];
// void, null, undefined
var myVoid = undefined;
var undef = undefined;
// functions
function getNum(num1, num2) {
    return num1 + num2;
}
// function getNumStr(num1: number|string, num2: number|string):number{
//     if (typeof(num1) === 'string')
//         num1 = parseInt(num1);
//     else
//         num2 = parseInt(num2);
// }   
var getName = function (first, last) {
    return first + last;
};
var voidFunction = function () {
    return;
};
// interfaces
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: 'Eat Dinner',
    text: 'Lorem'
});
var user = {
    name: "Hayes",
    id: 0
};
