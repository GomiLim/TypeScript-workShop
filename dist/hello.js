var hello = "hello";
var hello2 = "hello2";
var timeoutPromise = new Promise(function (reslove, reject) {
    setTimeout(function () {
        reslove("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);
import add from './util.js';
var value = add(1, 2);
console.log(value);
//# sourceMappingURL=hello.js.map