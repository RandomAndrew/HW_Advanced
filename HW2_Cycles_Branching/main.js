"use strict"

//1 - Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let numberN;
    do {
        numberN = +prompt ('Enter the number N');
    } while (!Number.isInteger(numberN));
console.log(`Enter the number N: ${numberN}`);
document.writeln(`<b><br><br>Enter the number N: ${numberN}`);

//2 - Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)

console.log('Чи ціле число N?',Number.isInteger(Number(numberN)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(numberN))}`);

//3 - Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let numberM;
do {
    numberM = +prompt ('Enter the number M');
} while (!Number.isInteger(numberM));
console.log(`Enter the number N: ${numberM}`);
document.writeln(`<br><br>Enter the number N: ${numberM}`);

//4 - Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходит)

console.log('Чи ціле число M?',Number.isInteger(Number(numberM)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(numberM))}`);

//5 - Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm

const evenNumber = confirm('Ignore even numbers?');
console.log(`Ignore even numbers? ${evenNumber}`);
document.writeln(`<br><br>Ignore even numbers? ${evenNumber}`);

//6 - Напишіть цикл, який буде складати числа від раніше отриманих N и M

let sumNumber = 0; 
for (let i = numberN; i <= numberM; i++) {
    if (evenNumber && i % 2 === 0) continue
    sumNumber += i;
}

console.log(`Sum of compound numbers: ${sumNumber}`)
document.writeln(`<br><br>Sum of compound numbers: ${sumNumber}`)

