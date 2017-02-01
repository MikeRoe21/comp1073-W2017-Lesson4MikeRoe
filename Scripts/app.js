/* javascript lives here */

console.log("App Started");

// initialize firstHeading variable

var firstHeading = document.getElementById("firstHeading");

firstHeading.style.color = "#0000FF";
firstHeading.style.fontWeight = "bold";

// Using firstHeading variable as if it is the element

console.log(firstHeading.textContent);

// writing the text that will appear on the website
firstHeading.textContent = "Bla bla bla";


// THREE steps for injecting content onto your page
//STEP 1 - make a reference to an element (reference variable)
var FirstParagraph = document.getElementById("FirstParagraph");

//STEP 2 - create a variable that contains your content (content variable)
var myContent = "It was a sunny day in Florida";

//STEP 3 - assign the variable with your content to the textContent property of the reference variable
FirstParagraph.textContent = myContent;




var SecondParagraph = document.getElementById("SecondParagraph");

var myHTMLContent = "<h2>Second Heading</h2>"
                    + "<p>This is an inner paragraph to the Second Paragraph</p>";

SecondParagraph.innerHTML = myHTMLContent;








// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}
