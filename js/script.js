'use strict';

let numberOfFilms;
let a,b,c,d;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB();
writeYourGenres();

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');
        if(a && b != null && a && b != '' && a.length <= 50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("error");
    }
}

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const genre = prompt(`Ващ любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = genre;
    }
}

