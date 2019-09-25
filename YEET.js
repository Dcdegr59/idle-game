
var score = 0; // Create a variable to store the score in

var title = new Title('Train (Working title (Prototype))'); // Create a title element
var button = new Button('Walk', btnPress);   // Create a button element
var hidden = new Button('Use weapon');
var timer = new Button ('Check timer')
var random = new Button ('Open crate')
var random = new Button ('Pick up random item')



var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show(250);
  }
  if(score > 12) {
    hidden.hide(500);
  }
}
