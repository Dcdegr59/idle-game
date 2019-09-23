var score = 0; // Create a variable to store the score in

var title = new Title('Train (Working title (Prototype))'); // Create a title element
var button = new Button('Walk', btnPress);   // Create a button element
var hidden = new Button('Pick up random item');
hidden.hide();
var scr = new Text(score);                    // Create a text element

let welcome = new Title('Train (Working title (Prototype))');
welcome.remove();

setInterval(createButton, 1000); // Run the "createButton" function once every 1000 milliseconds (once every second)

function createButton() {
  let = new Button('Walk');
}



setInterval(btnPress, 1000);   // Set up a loop

let score = 0; //Declare the data structure before using it!

let button = new Button('Click me to make score go up!', scoreIncrease); // Run the "score" function when you click the button

// Don't forget to define the function!
function scoreIncrease() {
  score++;
}
let score = 0;                   // Set score to 
let button = new Button('Pick up random item'); // Make a button
button.hide()                    // Hide the button

setInterval(scoreIncrease, 1000);// Run the "scoreIncrease" function once every second (1000 milliseconds)

function scoreIncrease() {
  score++;                       // Increase the score

  if(score > 10) {
    button.show();               // If the score reaches 11, show the button!
  }
}

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show(250);
  }
  if(score > 11) {
    hidden.hide(500);
  }

}

