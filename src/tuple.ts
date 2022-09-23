//即是特殊的数组
let tuple1: [number, string];
tuple1 = [1, "apple"];

let tuple2: [number, string, number];
tuple2 = [1, "apple", 1];

let tuple3: [number, string, ...boolean[], string];
tuple3 = [1, "apple", true, false, "last one"];

let tuple4: [...number[], boolean, boolean];
tuple4 = [1, 2, 3, 4, true, false];

let [n1, n2, n3, n4, n5, n6] = tuple4;

let tuple5: [number, boolean, string, string?];
tuple5 = [1, true, "a"];
