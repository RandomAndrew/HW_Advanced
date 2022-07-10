"use strict"


// 1. Cтворіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

const getRandomArray = (length, min, max) => {
	let newRandomArr = [];
  for ( let i = 0; i < getRandomArray.length; i++) {
  	newRandomArr.push(Math.round(Math.random() * (max - min) + min));
  }
  return newRandomArr;
}

console.log('Завдання 1:', getRandomArray(15, 1, 100))

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ! 

function getModa(...numbers) {



}


// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ


    // METHOD 1

function getAverage(...numbers) { 
 
    let intNum = numbers.filter(item => Number.isInteger(item));
    
    return intNum.reduce( (a, b) => a + b, 0) / intNum.length;
    }
    
    console.log('Завдання 3:', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

    // METHOD 2

    function getAverage(...numbers) {
  
        const total = numbers.reduce((total, number) => {
            return	total + number;
            }, 0);
            return total / numbers.length;
       }

       console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ


    const getMedian = arr => {
            const mid = Math.floor(arr.length / 2);
            let  nums = [...arr].sort((a, b) => a - b)
            return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        };

        console.log(getMedian([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));
   

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

let arr = [1, 2, 3, 4, 5, 6]; 
let newArr = arr.filter (x => x % 2 !== 0);

console.log('Завдання 5:', newArr);


// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 

function countPositiveNumbers(...numbers) {

    return numbers.filter((item) => item > 0).length;
}

console.log('Завдання 6:', countPositiveNumbers(1, -2, 3, -4, -5, 6));


// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5


function getDividedByFive(...numbers) {

    return numbers.filter ( (item) => item % 5 === 0);
}

console.log('Завдання 7:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


// 8.  Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 

function replaceBadWords(string) {

    const badWords = ["fuck", "shit"]; 
    
    //  пишу цикл в якому будемо проходитись по довжині стрінга 
    for (let i = 0; i < badWords.length; i++ ) {
    
      // За допомогою методу includes (true/false) визначаємо чи має string погані слова з badWords
        while (string.includes(badWords[i])) { 
    
        // в тілі цикла while заміняємо погані слова на символ "*"
          string = string.replace(badWords[i], "*".repeat(badWords[i].length))
    
          }
      }
    
    return string;
    
    }
    
    console.log(replaceBadWords("Are you fucking kidding?"));
    console.log(replaceBadWords("It's bullshit!"));

/*   9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
   Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.  */

   function divideByThree(word) {

    // Створюємо пустий масив
    
      const newWord = [];
    
      // Приводимо слово до нижнього регістру та розділяєм його пробілом " " 
    
      const arr = word.toLowerCase().split('');
    
        for (let i = 0; i < arr.length; i += 3 )  {
    
        // Пушимо в новий масив змінений рядок
    
          newWord.push(arr.slice(i, i+3).join(''))
    
        } 
      return newWord;
      }
    
    console.log(divideByThree("Commander"))
    console.log(divideByThree("LIVE"))

// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.


        function generateCombinations(word)  {


        // якщо введемо слово менше ніж 2 букви, то це поверне нам поточний рядок 
        if (word.length < 2 ) {
            return word
        } 
        
        // якщо буде введена цифра, то нас попросять ввести слово
        if (typeof word !== "string") {
        return "Будь ласка введіть слово"
        }
        
        
        // створюємо пустий масив 
        let emptyArray = [] 
        
        // створюємо цикл для перебору всіх символів у рядку
        for (let i = 0; i < word.length; i++){
            
            let currentStr = word[i];
            
            // спочатку ми розбиваємо наші символи від 0 до потомчного символу [i] і потім об'єднуємо [i] з наступним символом
            let remainingStr = word.slice(0, i) + word.slice(i + 1, word.length)

            for (let permutation of generateCombinations(remainingStr)){
            emptyArray.push(currentStr + permutation) }
        }
        return emptyArray;
        }

    console.log(generateCombinations("man"))
    console.log(generateCombinations("ol"))






