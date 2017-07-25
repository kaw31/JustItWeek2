// This script is for "Guess the number guessing game"

var iTimes = 0; // The times the user has tried
var iRes; // The secret number auto generated

// Init the input and secret number after DOM loaded 
window.addEventListener("DOMContentLoaded", reset);

// Add keydown event listener to input1 to check is a invalid input of period 
// or an enter to try
document.getElementById("input1").addEventListener("keydown", function (e) {
    if(!e) {
        e = window.event;
    }
    
    console.log(e.keyCode);
    switch(e.keyCode) {
        case 13: // enter key, do the Try
            guessOnce();
            return false;
        case 46: // period (46, 190) and "E" (69) key, need to be skipped
            preventKeyInput(e);
            //alert(e.keyCode);
            return false;
        case 190: // period (46, 190) and "E" (69) key, need to be skipped
            //alert(e.keyCode);
            preventKeyInput(e);
            return false;
        case 69: // period (46, 190) and "E" (69) key, need to be skipped
            //alert(e.keyCode);
            preventKeyInput(e);
            return false;
    }
});

// Prevent false input key
function preventKeyInput(e) {
    if(e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

// Add click event listener to button1 (Try it button)
document.getElementById("button1").addEventListener("click", guessOnce);

// Add click event listener to button2 (New game button)
document.getElementById("button2").addEventListener("click", reset);

// Check if the guess number is right
function guessOnce() {
    var iGuess = parseInt(document.getElementById("input1").value);
    console.log(iGuess);
    // Check is there any input at all
    if(isNaN(iGuess) || iGuess>100 || iGuess<1) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    console.log(iGuess);
    
    iTimes++; // Got a valid input, add one time to tried times
    document.getElementById("triedTimes").innerHTML = "Tried times: " + iTimes;
    
    document.getElementById("correctNumber").innerHTML = iGuess === iRes ? ("The correct number is "+iRes) : ((iGuess > iRes ? "Too big" : "Too small") + ", try again.");
    document.getElementById("congratulation").innerHTML = iGuess === iRes ? "Well done - correct guess!" : "";
    
    if(iGuess === iRes) {
        // Disabled input and try button when one game is over
        document.getElementById("input1").setAttribute("disabled", "disabled");
        document.getElementById("button1").setAttribute("disabled", "disabled");
        document.getElementById("correctNumber").className = "black";
    } else {
        // Set focus to input to help a new try
        document.getElementById("input1").focus();
        document.getElementById("input1").select();
    }
    
}


// Init the input and state information
function reset() {
    iTimes = 0;
    iRes = Math.ceil(Math.random() * 100);
    document.getElementById("input1").value = "";
    document.getElementById("triedTimes").innerHTML = "Tried times: " + iTimes;
    document.getElementById("congratulation").innerHTML = "";
    document.getElementById("correctNumber").innerHTML = "";
    document.getElementById("correctNumber").className = "red";
    document.getElementById("input1").focus();
    if(document.getElementById("input1").hasAttribute("disabled")) {
        document.getElementById("input1").removeAttribute("disabled");
        document.getElementById("button1").removeAttribute("disabled");
    }
}
