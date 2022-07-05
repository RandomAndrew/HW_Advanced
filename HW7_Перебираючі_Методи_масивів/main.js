"use strict"


// 1. Cтворіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

const getRandomArray = (length, min, max) => {
	let newRandomArr = [];
  for ( let i = 0; i < getRandomArray.length; i++) {
  	newRandomArr.push(Math.round(Math.random() * (max - min) + min));
  }
  return newRandomArr;
}

console.log(getRandomArray(15, 1, 100))

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ! 




// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ


function getAverage(...numbers) { 
 
    let intNum = numbers.filter(item => Number.isInteger(item));
    
    return intNum.reduce( (a, b) => a + b, 0) / intNum.length;
    }
    
    console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 

function countPositiveNumbers(...numbers) {

    return numbers.filter((item) => item > 0).length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5


function getDividedByFive(...numbers) {

    return numbers.filter ( (item) => item % 5 === 0).length;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

