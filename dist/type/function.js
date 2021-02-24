function add(x, y) {
    return x + y;
}
var result = add(1, 2);
function buildUserInfo(name, email) {
    if (name === void 0) { name = "-"; }
    if (email === void 0) { email = ""; }
    return { name: name, email: email };
}
var user1 = buildUserInfo();
var add2 = function (a, b) { return a + b; };
function store(type) {
    if (type === "과자") {
        return { a: "1.과자" };
    }
    else if (type === "아이스크림") {
        return { b: "2. 아이스크림" };
    }
    else {
        throw new Error('unsupported type');
    }
}
var s = store('아이스크림');
//# sourceMappingURL=function.js.map