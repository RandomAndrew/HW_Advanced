"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 

// function pairBoysGirls (arr) {

//     const boys
//     const girls
//     const boys

// }

function getPairs() {
    const arrPairs = [];
    let copyArr = [...STUDENTS];
    copyArr.splice (1, 2, "Олена", "Ігор");
    for (let i = 0; i < copyArr.length; i += 2) {
        arrPairs.push([copyArr[i], copyArr[i + 1]]);
    }
    return arrPairs;
};

console.log(arrPairs)

