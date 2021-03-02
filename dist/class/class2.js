class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        throw new Error("Method not implemented.");
    }
    sat(msg) {
        console.log(msg);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    writeCode(requirment) {
        throw new Error("Method not implemented.");
    }
    say(message) {
        throw new Error("Method not implemented.");
    }
    loveimchi() {
        console.log('love');
    }
    loveKimchi() {
        throw new Error("Method not implemented.");
    }
}
const ej = new KoreanProgrammer('ej', 2222);
//# sourceMappingURL=class2.js.map