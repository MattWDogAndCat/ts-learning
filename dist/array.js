"use strict";
let array1 = ["test1", "test2", "test1", "test4"];
let array2 = [1, 2, 3, 4];
let array3 = [true, false, true];
let array4 = [1, "test1", false];
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["fmale"] = 1] = "fmale";
})(gender || (gender = {}));
let array5;
array5 = [
    { name: "matt", age: 20, sex: gender.male },
    { name: "matt2", age: 30, sex: gender.fmale },
];
let array6 = [];
let array7 = [];
let array8 = [];
let array9 = [
    { name: "matt", age: 20, sex: gender.male },
];
array9[0]['name'] = 'hahah';
array1.forEach((e) => {
    console.log(e);
});
const res1 = array1.find((e) => e === 'test1');
console.log(res1);
const res2 = array1.findIndex((e) => e === 'test4');
console.log(res2);
const res3 = array1.reverse();
console.log(res3);
//# sourceMappingURL=array.js.map