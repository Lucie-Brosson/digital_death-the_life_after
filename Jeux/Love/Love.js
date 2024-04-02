console.log("Start");

///////////////////////////////////////////////////////////////////
////// library 
//////////////////////////////////////////////////////////////////

import * as d3 from "..\library\d3.v7.js"


///////////////////////////////////////////////////////////////////
////// Parse data  
//////////////////////////////////////////////////////////////////

const data = await d3.csv("Question_answer.csv")

console.log( data)
///////////////////////////////////////////////////////////////////
////// Variable 
//////////////////////////////////////////////////////////////////

var question_stage = 0

//document.getElementById("question").innerHTML = "Hello Dolly.";

document.getElementById("demo").innerHTML="Paragraph chdddddddddddddanged.";

//myFunction()
///////////////////////////////////////////////////////////////////
////// Question 
//////////////////////////////////////////////////////////////////

function myFunction() {
    console.log("game started")
    document.getElementById("question").innerHTML="Paragraphhhhhhhhhh changed.";

    // Change answer 

    document.getElementById("answer1").innerHTML="Paragraphhhhhhhhhh changed.";
    document.getElementById("answer2").innerHTML="Paragraphhhhhhhhhh changed.";
    document.getElementById("answer3").innerHTML="Paragraphhhhhhhhhh changed.";
    document.getElementById("answer4").innerHTML="Paragraphhhhhhhhhh changed.";

}
