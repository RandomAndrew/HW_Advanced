"use strict"

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 


function getMaxDigit(num) {
  const maxDigit = ('' + num).split('.').join('');
  return Math.max.apply(null, maxDigit.split(''));
}

console.log(getMaxDigit(123322))


// 2. Створити функцію, яка визначає ступінь числа. 

function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }

console.log(pow(-5,-10));

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.

function toUpperFirst(string) { 
	return string[0].toUpperCase() + string.substring(1).toLowerCase(); 
} 
console.log(toUpperFirst('aNDRIY'));

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function sumWithoutTax(num, tax=18 + 1.5) {
    return num - (num / 100 * tax);
}

console.log(sumWithoutTax('9000'));

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber(M, N) {
  return Math.floor(Math.random(M, N) * N);
}
console.log(getRandomNumber(1,10));

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 

function countLetter(letter, word) {
  return (word.toLowerCase().match(RegExp(letter.toLowerCase(), "g"))||[]).length
}

console.log(`6. Кількість повторюваних літер: ${countLetter('а', 'Абабагаламага')}`)

// 7 - 8. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 

function convertCurrency(money) {
  const RATE = 30; 
  if (money.includes('$') || money.toLowerCase().includes('usd')) {
    return parseInt(money) * RATE + "UAH"; }

  if (money.toLowerCase().includes('uah')) {
    return parseInt(money) / RATE + "USD";
  }
  return 'Currency not found.Please use only UAH or USD'
}

console.log(`7-8.1. Конвертація доларів в гривні: ${convertCurrency('100 usd')}`)
console.log(convertCurrency('3000 uah'));  
console.log(convertCurrency('200 eur'));  

// 9-10. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(length = 8) {
  let password = '';
  let randomNumber = 0;
  for(let i = 0; i <= length; i++){
    randomNumber = Math.round(Math.random() * 9 );
    password += randomNumber;
   }
   return password;
}
getRandomPassword();

console.log(getRandomPassword());

// 11. Створіть функцію, яка видаляє всі букви з речення. 

        //METHOD 1

function deleteLetters(string, letter) {
  return string.replaceAll(letter, '')
}

console.log(`${deleteLetters('blablabla', 'a')}`);

        //METHOD 2

let string = "we will we will rock you"

let string1 = string.replaceAll("w", ""); 

console.log(string1); 

// 12. Створіть функцію, яка перевіряє, чи є слово паліндромом. 


  function isPalyndrom(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
  }

  console.log(isPalyndrom('Я несу гусеня'));
  console.log(isPalyndrom('кокос'));
  console.log(isPalyndrom('мадам'));



// 13. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 


  function deleteDuplicateLetter(word) {

    let str = word.toLowerCase().split('').join('')
    
    for(let i = 0; i < word.length; i++) {
      
      if(countLetter(word[i], str) > 1) {
        str = deleteLetters(word[i], str)
      }
    }
      return str 
    }

  console.log(deleteDuplicateLetter('Бісквіт був дуже ніжний'))















