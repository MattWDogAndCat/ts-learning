"use strict";
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
var size2;
(function (size2) {
    size2[size2["small"] = 1] = "small";
    size2["medium"] = "string";
    size2["large"] = "true";
})(size2 || (size2 = {}));
var size3;
(function (size3) {
    size3["small"] = "sm";
    size3["medium"] = "md";
    size3["large"] = "lg";
})(size3 || (size3 = {}));
const buttonSize = size.large;
//# sourceMappingURL=enum.js.map