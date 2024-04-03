const accountId = 144553
let accountEmail = "anuj@gmail.com"
var accountpassword = "12345"
accouncity =" kolkata"
let accountState;

// accountId= 2

console.log(accountId);

console.table([accountId,accountEmail,accountpassword,accouncity,accountState]);

/*
prefer not to use var coz of issue in block scope and funtinal scope ({this curly braces are the scope}) using var if the name of varible is overridden and change the value it will not change the value of all var value  also if somtthing is declared and value is not adssingd to it after runing it will print undefinned

*/