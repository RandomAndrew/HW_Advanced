"use strict"

//1 - Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let N;
	do { 
		N = +prompt ("Введіть число N:", '')
	} while (!Number.isInteger(N));
console.log(`Введіть число N: ${N}`);
document.writeln(`<b><br><br> Введіть число N: ${N}`);

//2 - Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)

console.log("Чи ціле число N?", Number.isInteger(Number(N)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(N))}`);

//3 - Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

let M;
	do { 
		M = +prompt ("Введіть число M:", '')
	} while (!Number.isInteger(M));
console.log(`Введіть число M: ${M}`);
document.writeln(`<br><br> Введіть число M: ${M}`);

//4 - Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходит)

console.log("Чи ціле число M?", Number.isInteger(Number(M)));
document.writeln(`<br><br>Іs this number an integer? ${Number.isInteger(Number(M))}`);

//5 - Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm

const skipEvenNum = confirm("Чи потрібно пропускати парні числа?")
console.log(`Пропускати парні числа? ${skipEvenNum}`);
document.writeln(`<br><br>Ignore even numbers? ${skipEvenNum}`);

//6 - Напишіть цикл, який буде складати числа від раніше отриманих N и M

let sum = 0;

	for (let i = N; i <= M; i++) {
		if (skipEvenNum && i % 2 === 0) continue
	sum += i
	};

console.log(`Сума парних чисел: ${sum}`)
document.writeln(`<br><br> Sum of compound numbers: ${sum}`)

