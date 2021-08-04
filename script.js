// 
let body = document.querySelector('body'); 
let button = document.querySelector('button'); 
let wordContainer = document.querySelector('.word-container'); 
let word = document.createElement('h2'); 
let definition = document.getElementById('definition');
let footers = document.createElement('footer');
body.appendChild(wordContainer); 
wordContainer.appendChild(word); 

let headings = u(document.getElementsByClassName('title'))
headings.html('WORDOPLOIS');

// let user_text = u(document.getElementsByClassName('text_for_user'))
// user_text.html('Push the button to fetch a new word!');

let button_ = u(document.getElementsByClassName('btn btn-outline-info'));
button_.html('EXPLORE NOW');

let button1_ = u(document.getElementsByClassName('button1'));
button1_.html('LAUNCH WORD');

let title = u(document.getElementsByClassName('title'));
title.html('WORDOPOLIS');

function relocate_home()
{
     location.href = "app.html";
} 


// Function, randomWord is fetching the random word for the randomword API and printing to the variable word. 
let randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        console.log('response');
        return response.json();
    })
    .then(response => {
        word.textContent = response
        randomDefinition(word);
        wordContainer.classList = "No Word Available!"
    })
}
// This function is taking the dictionary API and grabbing the results from the randomWord function and providing the user with a corresponding definition.
const randomDefinition = (word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=7f9c78e6-b668-4896-bc21-7d2a4ea99861`)
    .then(response => {
        return response.json(); 
    })
    .then(response => {
        console.log(response[0].shortdef[0]); 
        definition.classList.remove('error'); 
        definition.textContent = "Definition: " + response[0].shortdef[0]; 
    })
    .catch(err => {
       console.log(err); 
       definition.classList.add('error'); 
       definition.textContent = "No Definition Available"; 
    });

}

u("article").append("<footer>Hello world</footer>");

// Click this button to generate a word with its definition. 
button.addEventListener('click', function(){
    randomWord(); 
})
u("article").append("<footer>Created by: ;lkajsdfl;kjsofpiur934, hkalsjhdfjksafy90</footer>");
