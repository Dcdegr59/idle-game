var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);         // Create a button element
var scr = new Text(score);                     // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score

let text = new Text('Hello!'); // Create a text element and place it on the screen
let button = new Button('I am a button'); // Create a button element and place it on the screen 
let title = new Title ('Title of Game'); // Create a title element and place it on the screen

let score = 0; //Declare the data structure before using it!

let Button = new Button('Click me to make score go up!', scoreIncrease); // Run the "score" function when you click the button


// Don't forget to define the function
function scoreIncrease() {
 score++;
}

stetInterval(createButton, 1000);// Run the "createButton" function once every 1000 milliseconds (once every second)
function createButton() {
  let button = new Button ('hello!');
}

let score = 0                    // Set score to
let button = new Button('Boo!'); // Make a button
button.hide()                    // Hide the button

setInterval(scoreIncrease, 1000);// Run the "scoreIncrease" function once every second (1000 milliseaconds)

function scoreIncrease(){
  score++;                       // Increase the score     

   if(score > 10) {
     button.show();              // If the score reaches 11, show the button!
   }
  }
}
