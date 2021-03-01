"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);
const util_js_1 = require("./util.js");
const value = util_js_1.default(1, 2);
console.log(value);
//# sourceMappingURL=hello.js.map