"use strict"

//1 - Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let N 
    do {
        N = +prompt ('Enter the number N');
    } while (!Number.isInteger(N));
console.log(`Enter the number N: ${N}`);
document.writeln(`<b><br><br>Enter the number N: ${N}`);

//2 - Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)

console.log('Чи ціле число N?',Number.isInteger(Number(N)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(N))}`);

//3 - Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let M 
do {
   M = +prompt ('Enter the number M');
} while (!Number.isInteger(M));
console.log(`Enter the number N: ${M}`);
document.writeln(`<br><br>Enter the number N: ${M}`);

//4 - Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходит)

console.log('Чи ціле число M?',Number.isInteger(Number(M)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(M))}`);

//5 - Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm

const EVEN_NUMBER = confirm('Ignore even numbers?');
console.log(`Ignore even numbers? ${EVEN_NUMBER}`);
document.writeln(`<br><br>Ignore even numbers? ${EVEN_NUMBER}`);



