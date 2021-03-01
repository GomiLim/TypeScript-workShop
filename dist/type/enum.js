var StarBuksGrade;
(function (StarBuksGrade) {
    StarBuksGrade[StarBuksGrade["WELCOME"] = 0] = "WELCOME";
    StarBuksGrade[StarBuksGrade["GREEN"] = 1] = "GREEN";
    StarBuksGrade[StarBuksGrade["GOLD"] = 2] = "GOLD";
})(StarBuksGrade || (StarBuksGrade = {}));
function getDicound(v) {
    switch (v) {
        case StarBuksGrade.WELCOME:
            return 0;
        case StarBuksGrade.GREEN:
            return 5;
        case StarBuksGrade.GOLD:
            return 10;
        default:
            return 0;
    }
}
console.log(getDicound(StarBuksGrade.GREEN));
console.log(StarBuksGrade.GREEN);
console.log(StarBuksGrade);
//# sourceMappingURL=enum.js.map