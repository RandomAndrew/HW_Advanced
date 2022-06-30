"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 

  
let studentsDublicate = [...students]

	let studentsPairs = []; 
  
  function getPairs() {

  	studentsDublicate.splice(1, 2, "Олена", "Ігор") 
      for (let i = 0; i < studentsDublicate.length; i += 2) {
        studentsPairs.push([studentsDublicate[i], studentsDublicate[i + 1]]);
      }
      
  return studentsPairs;
  }
  
  const pairs = getPairs();
  console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

function getThemes() {

  let combineArr = [];

    for (let i = 0; i < pairs.length; i++ ) {
      combineArr.push([pairs[i].join(" i "), themes[i]])
    }

  return combineArr;
  }

const getThemesPairs = getThemes();
console.log(getThemesPairs); 

// 3.  Зіставте оцінки(marks) зі студентом(students)  

function getRating() {

let ratingArr = [];

	for (let i = 0; i < students.length; i++) {
  ratingArr.push(students[i], marks[i]);
  }

return ratingArr;
}

const rating = getRating();
console.log(rating);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт

function getRandomRating () {

  let randomRatingArr = []; 

  for (let i = 0; getThemesPairs[i]; i++) {
      let raindomRait = Math.floor(Math.random() * 5 + 1); 
      randomRatingArr.push(getThemesPairs[i].slice());
      randomRatingArr[i].push(raindomRait);
  }
  return randomRatingArr;
}

const randomRating = getRandomRating();
console.log(randomRating);


















