/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary Movie Kiosk || created: 12/27/19
 *  @todo
 */
 
  "use strict";
const PROMPT = require('readline-sync');

let movieTitle, movieList, //string
currentUser, totalRating, numberOfRating, choice, movie, total, i; //number
const A = 1; //to create a loop

function main(){
	while(A == 1){ //loops forever
	setMovieList();
	setChoice();
		if(choice == 1){ //rates movie
			setMovie();
			setCurrentUser();
			setNumberOfRating();
			setTotalRating();
		} else if(choice == 2){
			setMovieTitle(); //adds movie
		}
	}
}

main();

function setMovielist(){
	if(movieList == undefined){
	movieList = [];
	}else{
		console.log(`${movieList} ${numberOfRating} ${totalRating`) //shows movies, ratings, and how many have rated
	}
}

function setChoice(){
	choice = PROMPT.question(`\nPlease chose one, [1 = rate a movie, 2 = add movie]`) //picks their choice of adding or rating
}

function setMovieTitle(){
	movieTitle = PROMPT.question(`\nPlease enter your movie.`)
	
	movieList = movieList.push(`${movieTitle}`); //adds their movie
}

function setMovie(){
	movie = PROMPT.question(`\nWhich movie did you want to review? [choice baced on order of movies ex. "first movie = 0, sencond movie = 1"]`)
	movie = movieList[`${movie}`]; //shows selected movie
}

function setCurrentUser(){
	currentUser = PROMPT.question(`\nHow many stars would you give this movie?`) //user rates movie
}

function setNumberOfRating(){
	if(numberOfRating == undefined){
	numberOfRating = 1;
	}else{
		numberOfRating = numberOfRating++; //shows how many times it was rated
	}
}

function setTotalRating(){
	if(totalRating == undefined){
		totalRating = `${currentUser}`;
		i++;
	}else{
		i++;
		total = (totalRating + `${currentUser}`) / i;
		totalRating = total; //does the math to find average
	}
}
