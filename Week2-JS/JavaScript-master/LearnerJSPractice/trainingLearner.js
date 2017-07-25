// The JavaScript Code

/*===== UNDERSTANDING BASICS AND FUNDAMENTALS OF FUNCTIONS ======*/

//function calc() {
//    
//    a = a * 2;
//    a = a + 3;
//}
//
//var a = 10;
//
//
//calc();
//
//console.log(a);

 
/*===== FUNCTIONS WITH PARAMETERS ======*/

//// the b inside the function is called PARAMETER
//function calc(b, c) {
//    
//    a = a * c;
//    a = a + b;
//}
//
//var a = 10;
//
//
//calc(2, 3); // the number inside the function being called is a ARGUMENT
//
//console.log(a);


/*===== PASSING FUNCTIONS AS PARAMETERS ======*/

//function calc(b) {
//    
//    a = a * 2;
//    a = a + b;
//}
//
//var a = 10;


//very simple function to calculate a sum of two numbers

//var result;
//
//function sum() {
//    
//    result = 2 + 2;
//    
//    return result;
//}

//sum();
//
//console.log(result);

//calc(sum());
//
//console.log(a);


//calc();
//
//console.log(a)


/*===== ASSIGNING FUNCTIONS AS VARIABLES ======*/

//var myCalc = function(b) {
//    
//    a = a * 2;
//    a = a + b;
//}
//
//var a = 10;
//
//myCalc(3);
//
//console.log(myCalc);


/*===== SELF INVOKED FUNCTIONS ======*/

var a = 10;

(function() {
    
    a = a * 2;
    a = a + 3;
})();

console.log(a);