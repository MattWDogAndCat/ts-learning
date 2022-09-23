// 描述对象
interface user {
  name: string;
  age: number;
}
//描述函数
interface setUser1 {
  (name: string, age: number): void;
}

//描述对象
type User = {
  name: string;
  age: number;
};
//描述函数
type setUser2 = (name: string, age: number) => void;

//可以扩展
// interface extends interface
interface Name {
  name: string;
}

interface user2 extends Name {
  age: number;
}

//type extends types
type Name1 = { name: string };
type user1 = Name1 & { age: number };

//interface extends types
interface user3 extends Name1 {
  sex: string;
}

//type extends interface
type user4 = Name & {
  sex: string;
};

type newString = String;
type newA = string | number;

//可以使用typeof
let apple = 'apple';
type newB = typeof apple;

interface A1 {name: string};
interface A1 {age: number};
//即 interface A1 {name: string; age: number};