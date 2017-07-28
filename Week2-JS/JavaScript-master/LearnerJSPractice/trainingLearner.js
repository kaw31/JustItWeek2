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

//var a = 10;
//
//(function() {
//    
//    a = a * 2;
//    a = a + 3;
//})();
//
//console.log(a);


/*===== OBJECT CONSTRUCTOR ======*/

//function Student(first, last, age, sLoan) {
//    
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.studentLoan = sLoan;
//    this.fullName = 
//    function(firstName, lastName) {
//        return this.firstName + " " + this.lastName;
//    }
//    
//}
//
//
//var rob = new Student("Rob", "Smith", 21, true);
//
//console.log(rob);
//console.log(rob.age);
//console.log(rob.fullName());
//
//var naga = new Student("Naga", "Buffon", 18, false);
//
//console.log(naga);
//console.log(naga.age);
//console.log(naga.fullName());


/*===== JS PROTOTYPE ======*/

function Student(first, last, age, sLoan) {
    
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.studentLoan = sLoan;
//    this.fullName = 
//    function(firstName, lastName) {
//        return this.firstName + " " + this.lastName;
//    }
//    
}

Student.prototype.fullName = function() {
    return this. firstName + " " + this.lastName;
}

var rob = new Student("Rob", "Smith", 21, true);

var naga = new Student("Naga", "Buffon", 18, false);

console.log(rob.fullName());
console.log(rob);