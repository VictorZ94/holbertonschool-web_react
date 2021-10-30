console.log("Hello Typescript");
console.log("Hello Typescript * 2");


// data types
let num: number = 22;
num++;
console.log(num);

let mystring: string = "Hello Baby";
console.log(mystring);

let myBoolean: boolean = false


let myVar: any = "Hello";
myVar = false

// Array's
let stringArray: string[] = ["1", "2","3"]
let numberArray: number[] = [1, 2, 3, 4,5]
let booleanArray: boolean[] = [true, false, true, false]
let anyArray: any[] = [1, [2], "hello", false]

//tuples in TS
let strNumTuple: [string, number];
strNumTuple = ["Hello", 22];
// strNumTuple = ["World", 254, "", 45];

// void, null, undefined
let myVoid: void = undefined;
let undef: undefined = undefined;


// functions
function getNum(num1:number, num2: number):number {
    return num1 + num2;
}

// function getNumStr(num1: number|string, num2: number|string):number{
//     if (typeof(num1) === 'string')
//         num1 = parseInt(num1);
//     else
//         num2 = parseInt(num2);
// }   

let getName = (first: string, last:string):string =>  {
    return first + last
}

let voidFunction = ():void => {
    return;
}

// interfaces
function showTodo(todo: {title: string; text: string}) {
    console.log(`${todo.title} - ${todo.text}`);
}

showTodo({
    title: 'Eat Dinner',
    text: 'Lorem',
})

// or this way
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};
