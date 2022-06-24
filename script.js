"use strict";

const numberOfFilms = prompt('skolko filmov vy posmotreli?', '');


let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    private:false
};



const a = prompt('Odin iz poslednih prosmotrennyh filmov', ''),
      b = prompt('Na skolko ocenite ego?', ''),
      c = prompt('Odin iz poslednih prosmotrennyh filmov', ''),
      d = prompt('Na skolko ocenite ego?', '');


personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;


console.log(personalMovieDB);