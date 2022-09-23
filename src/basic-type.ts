//string
let example1: string = "test1";
//number
let example2: number = 1;
//boolean
let example3: boolean = true;
//undefined
let example4: undefined = undefined;
//null
let example5: null = null;
//any
let example6: any;
//unknown
let example7: unknown;

//assertions
let dom1 = document.querySelector("body") as HTMLBodyElement;
let dom2 = <HTMLBodyElement>document.querySelector("body");
console.log(dom1.id);
console.log(dom2.id);
