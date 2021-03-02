function createPromise(x, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, time);
    });
}
createPromise('ddd', 100)
    .then(v => console.log(v));
function createTuple2(v1, v2) {
    return [v1, v2];
}
const t1 = createTuple2('user1', 200);
//# sourceMappingURL=generic.js.map