// const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=680a0c9a'
// // const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API = 'http://www.omdbapi.com/?apikey=680a0c9a&s=';


// const main = document.getElementById('main')
// const form = document.getElementById('form')
// const search = document.getElementById('search')

// // Get initial movies
// getMovies(API_URL)

// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()

//     showMovies(data.results)
// }

// function showMovies(movies) {
//     main.innerHTML = ''

//     movies.forEach((movie) => {
//         const { title, poster_path, vote_average, overview } = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
//             <img src="${IMG_PATH + poster_path}" alt="${title}">
//             <div class="movie-info">
//           <h3>${title}</h3>
//           <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="overview">
//           <h3>Overview</h3>
//           ${overview}
//         </div>
//         `
//         main.appendChild(movieEl)
//     })
// }

// function getClassByRate(vote) {
//     if(vote >= 8) {
//         return 'green'
//     } else if(vote >= 5) {
//         return 'orange'
//     } else {
//         return 'red'
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=680a0c9a';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'http://www.omdbapi.com/?apikey=680a0c9a&s=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(SEARCH_API + 'batman'); // Replace with your desired default search term

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    // Check if data.Search exists to avoid errors
    if (data.Search) {
        showMovies(data.Search);
    } else {
        main.innerHTML = '<p>No movies found.</p>';
    }
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { Title, Poster, Year } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${Title}">
            <div class="movie-info">
                <h3>${Title}</h3>
                <span>${Year}</span>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

// Remove getClassByRate since OMDb doesn't provide ratings

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});
