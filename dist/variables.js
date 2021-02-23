var score1 = 0;
var score2 = 200;
var defaultScore = 0;
function outer() {
    if (true) {
        var score = 0;
    }
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    console.log(score);
}
function outer2() {
    if (true) {
        var score = 0;
        score = 30;
    }
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    };
    for (var i = 0; i < 3; i++) {
        _loop_1(i);
    }
}
outer2();
//# sourceMappingURL=variables.js.map