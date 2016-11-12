interface ISearchFunc {
    (s1: string, s2: string, s3): string[];
}

let SearchFunc: ISearchFunc;

SearchFunc = (s1, s2, s3) => [s1, s2, s3];


let SearchFuncB: ISearchFunc = (s1, s2, s3) => [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
let SearchFuncC: ISearchFunc = (s1, s2, s3) => [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];

let f2 = function logger(f1: ISearchFunc){
 //Simulate that we get data from somewhere and uses the provided function
 let [ a, b, c] = ["A", "B", "C"];
 console.log(f1(a,b,c));
}

f2(SearchFunc);
