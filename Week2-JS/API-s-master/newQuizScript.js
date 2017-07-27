var allQuestions = [{
	question: 'What is the capital city of Australia?',
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
	question: 'What is the capital city of Spain?',
	choices: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'],
	correctAnswer: 0
}];


var questionTitle = document.getElementById('questionTitle');
var nextButton = document.getElementById('nextButton');
var answers = document.getElementsByClassName('answers');



questionTitle.innerHTML = allQuestions[0].question;
answers.innerHTML = allQuestions[0].choices;

nextButton.onclick = function() {
    
    
}
