//string
let str1: string = "hello world";

//number
let num1: number = 1;

//boolean
let bool: boolean = true;

//null
let nul: null = null;

// undefine
let example: undefined = undefined;


//assertions
let dom1 = document.querySelector('body') as HTMLBodyElement;
let dom2 = <HTMLBodyElement>document.querySelector('body');
console.log(dom1.id); 
console.log(dom2.id);

