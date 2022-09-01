const myForm = document.getElementById('search-form');
const movieContainer = document.getElementById("moviesContainer")

document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
    myForm.addEventListener('submit', function(e){
        // event listener code goes here
        e.preventDefault();
        console.log("argh");
        movieContainer.innerHTML = renderMovies(movieData);
        
    })
});


function renderMovies(movieArray) {
    const movieHtmlArray =  movieArray.map((currentMovie) => {
        return `<div>
        <img class="card-img-top" src=${currentMovie.Poster}/>
        <h2>${currentMovie.Title}</h2>
        <p>${currentMovie.Year}</p>
    
        <button class="add-button" data-imdbid="${currentMovie.imdbID}">Add Movie</button>
        </div>`
    });
    return movieHtmlArray.join('');
}
