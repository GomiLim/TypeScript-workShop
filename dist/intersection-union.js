function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'ej' }, { do() { console.log(this.name + ': 야호'); } });
console.log(u.name);
console.log(u.do());
console.log(u);
function add1(a, b) {
    return a + b;
}
console.log(add1(1, 2));
function compare1(x, y) {
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    throw Error('not supported type');
}
const v = compare1(1, 2);
console.log([3, 2, 1].sort(compare1));
console.log(['c', 'b', 'a'].sort(compare1));
console.log(['c', 'b', 1].sort(compare1));
//# sourceMappingURL=intersection-union.js.map