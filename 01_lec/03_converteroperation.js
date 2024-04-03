let score="33"

// const {score} = req.body cant find the dayatatype

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // guarantee it convert into num
console.log(typeof valueInNumber);
console.log(valueInNumber); //if value is 33abc it will print NaN not a number, if null then undefined,if true then it will print 1

// "33"=> 33
// "33abc"=> NaN
//true => 1,false=>0;

let isLoggedIn =1
//let isLoggedIn='anuj'
// let isLoggedIn=" "

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true; 0=>false;
//" " =>false
//"anuj"=>true


let someNumber=33
let stringNumber= String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//string 




