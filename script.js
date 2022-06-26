

 "use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('skolko filmov vy posmotreli?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('skolko filmov vy posmotreli?', '');
    }
   
    

}
start();

const personalMovieDB = {
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

function rememberMyFilms (){
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

}
rememberMyFilms();




function detectPersonalLevel(){
    if (personalMovieDB.count <10 ){
        console.log('Prosmotreno dovolno malo filmov');
    } else if (personalMovieDB.count >10 && personalMovieDB.count<30){
       console.log ('Vy klassicheskii zritel');
    }else if(personalMovieDB.count >30){
        console.log('Vy kinoman');
    }else{
        console.log ('oshibka');
    }
    
} 

detectPersonalLevel();



function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);


function writeYourGenres(){

    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Vash lyubimyi janr pod nomerom ${i}`);;
    }   
   
} 
writeYourGenres();
console.log(personalMovieDB); 





 


/* function sayHello(text){
    return(`Привет, ${text}`);
}


sayHello('Anton');


function returnNeighboringNumbers(number) {
    const arr = [];

   
    arr.push(--number, number, ++number);
    
    console.log(arr);
    
}

returnNeighboringNumbers(5);

 */


// getMathResult(5, 3)
/* function getMathResult(number, progressieNumber) {
    const numbersArray = [];

        
    if (typeof (progressieNumber) ==="string" || progressieNumber <= 0) {
        return number;
        
    }

    for (let i = number; i <= (number * progressieNumber) + 1; i = i + number) {
        numbersArray.push(i);
    }

    return numbersArray.join('---');
}
console.log(getMathResult(10, '3'));


// Место для второй задачи
function returnNeighboringNumbers(number) {
    const arr = [];

   
    arr.push(number - 1, number, ++number);
    
    return arr;
}
console.log(returnNeighboringNumbers(4)) */




