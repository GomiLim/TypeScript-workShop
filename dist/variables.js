var score1 = 0;
let score2 = 200;
const defaultScore = 0;
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
        let score = 0;
        score = 30;
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}
outer2();
//# sourceMappingURL=variables.js.map