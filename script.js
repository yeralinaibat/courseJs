

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
    const a = prompt('Odin iz poslednih prosmotrennyh filmov', '').trim(),
          b = prompt('Na skolko ocenite ego?', '').trim();

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

//v = a  

/* function calculateVolumeAndArea(number) {

    if (!Number.isInteger(number) || number<0 || typeof(number)!=='number') {
        console.log('При вычислении произошла ошибка')
    }else {
        console.log('Объем куба:',number*number*number + "," + 'площадь всей поверхности: ' + 6*number*number );


    }


}
calculateVolumeAndArea();


if (!Number.isInteger(number) || number > 9||number=0 || typeof(number)!=='number'){


function getCoupeNumber(number) {
    if (number > 9|| number == 0 ){
        console.log('Таких мест в вагоне не существует');
    } else if (!Number.isInteger(number)|| typeof(number)!=='number'||number<0){
        console.log('Ошибка. Проверьте правильность введенного номера');
    }else{
        let vagon = number/4;
        console.log(Math.ceil(vagon));

    }
    

}

getCoupeNumber('hgj');

function getTimeFromMinutes(number) {
    if (number<0 ){
        console.log('Ошибка, проверьте данные')        
    }else{
        let chas = number / 60;
        minutes = number % 60;
    console.log(`Это ${Math.floor(chas)} часа и ${Math.floor(minutes)} минут`);
    }
}
getTimeFromMinutes (150);





// Место для первой задачи
function getTimeFromMinutes(number) {
    if (number<0 ){
        console.log('Ошибка, проверьте данные');
        
    }else {
        
        let chas = Math.floor(number / 60);
        let min = Math.floor(number % 60);
         let chasStr = '';

    switch (chas) {
        case 0: 
            chasStr = 'часов';
            break;
        case 1:
            chasStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            chasStr = 'часа';
            break;
        default:
            chasStr = 'часов';
    }

     console.log (`Это ${chas} ${chasStr} и ${min} минут`);
    
}
}
getTimeFromMinutes(-50);



function findMaxNumber() {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }

}
console.log(findMaxNumber(1,2,4,7)); */



/* function first(){

    setTimeout(function(){
        console.log(2);
    } ,1000);
}

first(); */


/* const options = {
    name : 'test',
    age: 28,
    lastName: 'eser',
    color: {
        bg: 'black',
        border: 'red',
    }
};


/* for (let key in options) {
    if (let key in options  ){
        if (typeof options[key]) === 'object'){
            console.log(`Svoistva ${key} imeet znachenie ${options[key][i]}`);
        }
    }
    console.log(`Svoistva ${key} imeet znachenie ${options[key]}`);
} */
/* console.log (Object.keys(options).length); */








