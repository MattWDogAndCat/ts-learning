
interface obj1 {
  name: string;
  age: number;
  sex: string;
}

function person(params: obj1):void {
  console.log(params.name);
}

interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}

function getShape(params: PaintOptions): void {
  let str1 = params.xPos;
  let d = params.yPos;
  if( str1 && d) {
    let a = str1 + d;
  }
}

interface shape2 {
  [index: string] : string
}


function getShape2(params: shape2): void {
  console.log('hello world');
}

getShape2({apple: 'apple', banana: 'banana', orange: 'aaa'});

interface shape3 {
  [index: string] : string | number
} 

let aaaa: shape3 = {apple: 1, orange: 'orange', banana: 2};


//generic object type
interface box <Type> {
  content: Type
}

const a : ReadonlyArray<string> = ['apple', 'orange', 'banana'];
let b : string[] = [];
