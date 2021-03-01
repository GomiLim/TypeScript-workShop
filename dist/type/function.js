function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name = "-", email = "") {
    return { name, email };
}
const user1 = buildUserInfo();
const add2 = (a, b) => a + b;
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
const s = store('아이스크림');
//# sourceMappingURL=function.js.map