//1. Declare variables and capture input.
const noun = prompt('Please type a noun.');
const verb = prompt('Please type a verb.');
const adj = prompt('Please type an adjective.');

// 2. Combine the input with other words to create a story.
const story = (`<p>Once upon a time, there was a little ${noun} with big dreams and a ${adj} woman that ${verb} them.</p>`);

// 3. Display the story as a <p> inside the <main> element. 
document.querySelector('main').innerHTML = story;