///1: variables ///
/// we are variable with three key wordrs //

// A keyword with allow developer to reintilize it value in a declare variable like following//
//  variable declaration
let     myname    =        "Abdullah";//variable intialization//
myname = "ronaldo";
console.log(myname);

// but in "const" case once value add than its not change then its been constant//
const luckyNumber = 7;
console.log(luckyNumber);


//A less recomended keyword due to its old feature and can reintilize in future and can use the declare variable name to declare other variable that"s why less use//
var age = 10;
console.log(age);
var age = 20

///2: Datatypes //
let yourname = "salman"; // type inference //
let yourname2: string = "saleem";// strongly typed syntax //

let yourage = 20;// type inference //
let yourage2:number = 20;// type inference //

let youmarried = true;// type inference //
let youmarried2:boolean = false;// type inference //

//less recomended data type, because once you us e it then it can reintialize your data in any syntax like number or text that shown in below//
let num1:any = 1000;
num1 = "abdullah";
num1 = false;

// operators //

//3: Arthmetics operators //

// Addition //

const  a:number = 5;
const b:number = 10; 
console.log( a + b);// ANS=15 //
// also do like that method below //
const result: number = 2 + 5 + 6 ;// ANS=13 //
console.log(result);

// Multiplication //
console.log(a * b);// ANS=50 //
//   can do like below  //

// subtraction //
console.log(a - b);// ANS= -5 //

// division //
console.log(a / b);// ANS= 0.5 //

// Modulus //

console.log(a % b);// ANS= 0 //






