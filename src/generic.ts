function fun1<T>(params: T): T {
  return params;
}

function fun2<T>(params: T[]): T[] {
  return params;
}

let fun3: <T>(params: T) => T;

interface iFn {
  <T>(params: T) : T
} 


interface iFn2 <Type> {
  name: Type
}

interface iFn3 <T> {
  (params: T[]) : T
}


//约束
interface iHasLength {
  length: number;
}


//T 必须带有length这个属性
function fn4 <T extends iHasLength> (params: T) : T {
  return params
}