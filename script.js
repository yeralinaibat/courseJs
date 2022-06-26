

 "use strict";

const numberOfFilms = +prompt('skolko filmov vy posmotreli?', '');



let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    private:false
};


for (let i = 0; i < 2; i++){
    const a = prompt('Odin iz poslednih prosmotrennyh filmov', ''),
          b = prompt('Na skolko ocenite ego?', '');

    if (a!==null && b!==null && a!='' && b!='' && a.length < 50) {
        personalMovieDB.movies[a]=b;
        console.log('done');

    } else{
        console.log('error');
        i--;
    }
    
}

if (personalMovieDB.count <10 ){
    console.log('Prosmotreno dovolno malo filmov');
} else if (personalMovieDB.count >10 && personalMovieDB.count<30){
   console.log ('Vy klassicheskii zritel');
}else if(personalMovieDB.count >30){
    console.log('Vy kinoman');
}else{
    console.log ('oshibka');
}
    

console.log(personalMovieDB); 








