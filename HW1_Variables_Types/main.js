"use strict";

const SHIRT_1 = 15.678;
const PANTS_2 = 123.965;
const SWEATER_3 = 90.2345;

//1 - Використовуючи вбудований об'єкт Math – виведіть максимальне число 

const Max_Price = Math.max(SHIRT_1, PANTS_2, SWEATER_3);
console.log(`Maximum price: ${Max_Price}`);
document.writeln(`<b>Maximum price: ${Max_Price}<br><br>`)

//2 - Використовуючи вбудований об'єкт Math – виведіть мінімальне число 

const Min_Price = Math.min(SHIRT_1, PANTS_2, SWEATER_3);
console.log(`Minimal price: ${Min_Price}`);
document.writeln(`Minimal price: ${Min_Price}<br><br>`)

//3 - Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

const Sum = SHIRT_1 + PANTS_2 + SWEATER_3;
console.log(`The cost of all goods: ${Sum}`);
document.writeln(`The cost of all goods: ${Sum}<br><br>`)

//4 - Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.

const Sum_Without_Pennies = 
    Math.floor(SHIRT_1) + 
    Math.floor(PANTS_2) + 
    Math.floor(SWEATER_3);
console.log(`Rounded value of all goods: ${Sum_Without_Pennies}`);
document.writeln(`Rounded value of all goods: ${Sum_Without_Pennies}<br><br>`)

//5 - Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300) 

const Sum_Rouned_To_The_Hundredth = Math.round(Sum / 100) * 100;
console.log(`Rounded to hundredth: ${Sum_Rouned_To_The_Hundredth}`);
document.writeln(`Rounded to hundredth: ${Sum_Rouned_To_The_Hundredth}<br><br>`)

//6 - Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

const Parsity_Price = Sum_Without_Pennies % 2 === 0; 
console.log(`Even number? ${Parsity_Price}`);
document.writeln(`Even number? ${Parsity_Price}<br><br>`)

//7 - Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

const Remainder_Sum = 500 - Sum;
console.log(`Remainder from 500?: ${Remainder_Sum}`);
document.writeln(`Remainder from 500?: ${Remainder_Sum}<br><br>`)

//8 - Виведіть середнє значення цін, округлене до другого знаку після коми

const Average_Value = (Sum / 3).toFixed(2);
console.log(`Average value price: ${Average_Value}`);
document.writeln(`Average value price: ${Average_Value}<br><br>`)

//9 - (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random). 

const Random_Discount = Math.floor(Math.random() * (20 - 10) + 10);
console.log(`Random discount 10-20%: ${Random_Discount}`);
document.writeln(`Random discount 10-20%: ${Random_Discount}<br><br>`)

//10 - Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

const Client_Discount = (Sum - Sum * Random_Discount / 100).toFixed(2);
console.log(`Sum with discount: ${Client_Discount}`);
document.writeln(`Sum with discount: ${Client_Discount}<br><br>`)

//11 - Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? 

const Net_Profit = ( Sum / 2 - Sum * Random_Discount / 100).toFixed(2);
console.log(`Net profit with discount: ${Net_Profit}`);
document.writeln(`Net profit with discount: ${Net_Profit}<b><br><br>`)