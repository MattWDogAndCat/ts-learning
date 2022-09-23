//数组的定义
//数组中都是string类型
let array1: string[] = ["test1", "test2", "test1", "test4"];
//数组中都是数字类型
let array2: number[] = [1, 2, 3, 4];
//数组中都是boolean类型
let array3: boolean[] = [true, false, true];
//数组中可以是任意的类型
let array4: any[] = [1, "test1", false];

//也可以是自定义的类型
enum gender {
  male = 0,
  fmale,
}
interface iPerson {
  name: string;
  age: number;
  sex: gender;
}

let array5: iPerson[];
array5 = [
  { name: "matt", age: 20, sex: gender.male },
  { name: "matt2", age: 30, sex: gender.fmale },
];

//array 只读
let array6: ReadonlyArray<string> = [];
let array7: ReadonlyArray<number> = [];
let array8: ReadonlyArray<boolean> = [];
let array9: ReadonlyArray<iPerson> = [
  { name: "matt", age: 20, sex: gender.male },
];

//array是只读类型，如果每一个value是一个object的话，是可以对每个object中的值做出修改。
array9[0]["name"] = "hahah";

//进行数组的一些常规操作
array1.forEach((e: string) => {
  console.log(e);
});

const res1 = array1.find((e: string) => e === "test1");
console.log(res1);

const res2 = array1.findIndex((e: string) => e === "test4");
console.log(res2);

const res3 = array1.reverse();
console.log(res3);
