var allQuestions = [{
	question: 'What is the capital of Australia?',
	choices: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
	correctAnswer: 2
},
{
	question: 'Who won the 2014 FIFA World Cup?',
	choices: ['Brazil', 'England', 'Germany', 'Spain'],
	correctAnswer: 2
},
{
	question: 'What book series is authored by J.K Rowling?',
	choices: ['Game of Thrones', 'Hunger Games', 'Twilight', 'Harry Potter'],
	correctAnswer: 3
},
{	
	question: 'The Eiffel Tower is located in which following country?',
	choices: ['Italy', 'France', 'Iceland', 'Mexico'],
	correctAnswer: 1
},
{	
	question: 'What is the capital of Spain?',
	choices: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'],
	correctAnswer: 0
}];


var question = document.getElementById('questionTitle');
var nextButton = document.getElementById('nextButton');
var answer1 = allQuestions[0].choices[0];
var answer2 = allQuestions[0].choices[1];
var answer3 = allQuestions[0].choices[2];
var answer4 = allQuestions[0].choices[3];



//questionTitle.innerHTML = allQuestions[0].question;
//answer1.innerHTML = allQuestions[0].choices[0];
//answer2.innerHTML = allQuestions[0].choices[1];
//answer3.innerHTML = allQuestions[0].choices[2];
//answer4.innerHTML = allQuestions[0].choices[3];




//    function Student(first, last, age, sLoan) {
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


document.getElementById("questionTitle").innerHTML = allQuestions[0].question;

document.getElementById("answer1").innerHTML = allQuestions[0].choices[0];
document.getElementById("answer2").innerHTML = allQuestions[0].choices[1];
document.getElementById("answer3").innerHTML = allQuestions[0].choices[2];
document.getElementById("answer4").innerHTML = allQuestions[0].choices[3];

function correct() {
    
    if {
        
    }
}

