function fn1(x: number, y: number): number {
  return x + y;
}

let fn2: (x: number, y: number) => number;
fn2 = (a, b) => {
  return a + b;
};

function fn3(x: number, y: string): string {
  return "hello world";
}

function fn4(x: number, y?: number): void {
  console.log(x);
}

function fn5(x: number, y: number, ...rest: string[]): string {
  return "helo";
}

function fn6(
  x: number,
  y?: number,
  z: string = "apple",
  a?: "fa",
  ...rest: string[]
): void {}

function fn7(x: string): string;
function fn7(x: number): number;
function fn7(x): any {
  if (typeof x === "string") {
    return "hello";
  }
  if (typeof x === "number") {
    return 1;
  }
}


