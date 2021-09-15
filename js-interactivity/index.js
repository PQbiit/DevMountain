
const message = document.querySelector('#message');

let addMovie = function(event){
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie); 
    movie.appendChild(deleteBtn);
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}

const movieForm = document.querySelector('form');
movieForm.addEventListener('submit', addMovie);

const deleteMovie = function(event) {
    const movieTitle = event.target.parentNode.lastChild.textContent;
    event.target.parentNode.remove();
    message.textContent = `${movieTitle} was removed!`;
    revealMessage();
}

const crossOffMovie = function(event){
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`;
    }else{
        message.textContent = `${event.target.textContent} added back to the list`;
    }
    revealMessage();
}

const revealMessage = function() {
    message.classList.remove('hide');
    setTimeout(()=>{
        message.classList.add('hide');
    }, 1000);

}