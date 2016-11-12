var SearchFunc;
SearchFunc = function (s1, s2, s3) { return [s1, s2, s3]; };
var SearchFuncB = function (s1, s2, s3) { return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()]; };
var SearchFuncC = function (s1, s2, s3) { return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()]; };
var f2 = function logger(f1) {
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(SearchFunc);
//# sourceMappingURL=ex4.js.map