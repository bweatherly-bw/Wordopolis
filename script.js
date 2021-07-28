const token = config.MY_API_TOKEN;
let body = document.querySelector('body'); 
let button = document.querySelector('button'); 
let wordContainer = document.querySelector('.word-container'); 
let word = document.createElement('h1'); 
let definition = document.createElement('p'); 
body.appendChild(wordContainer); 
wordContainer.appendChild(word); 
wordContainer.appendChild(definition); 

let headings = u(document.getElementsByClassName('title'))
headings.html('Dictionary API');

let user_text = u(document.getElementsByClassName('text_for_user'))
user_text.html('Push the button to receive a new word!');

let button_ = u(document.getElementsByClassName('button'));
button_.html('ENTER');

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

const randomDefinition = (word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${token}`)
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

button.addEventListener('click', function(){
    randomWord(); 
})