"use strict"

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this.


    // Створюємо функцію в параметрі - зарплата та повертаємо посилання на об`єкт "tax" і множимо на зарплату "sallary". 
    // Методом toFixed ми врахуємо скільки знаків після коми потрібно залишити та враховуємо дрібні числа
    
        function getMyTaxes(sallary) {
            return (this.tax * sallary).toFixed(2);
        };

        console.log(getMyTaxes.call(ukraine, 1950));
        console.log(getMyTaxes.call(latvia, 1850));
        console.log(getMyTaxes.call(litva, 1670));

// 2. Створіть функцію яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні.

    //Створюємо функцію в параметрі - країна , повертаємо посилання на середню зарплатню "middleSalary" та податок "tax", множимо. 
        function getMiddleTaxes(country) {
            return (this.tax * this.middleSalary).toFixed(2);
        }

        console.log(getMiddleTaxes.call(ukraine));
        console.log(getMiddleTaxes.call(latvia));
        console.log(getMiddleTaxes.call(litva));
 
// 3. Створіть функцію яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.        

    //Створюємо функцію в параметрі - країна, повертаємо всі посилання через this та множимо їх аби дізнатись суму. 
        function getTotalTaxes(country) {
            return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
        }

        console.log(getTotalTaxes.call(ukraine));
        console.log(getTotalTaxes.call(latvia));
        console.log(getTotalTaxes.call(litva));

// 4. Створіть функцію яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
    //Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
    //taxes – розраховується в залежності від вибраної країни та значення salary.       

    //
    function getMySalary(country) {
	
  
        const salary = Math.floor(Math.random() * 500 + 1500)
        const taxes = Math.round(country.tax * salary)
        const profit = Math.round(salary - taxes)
        
        const objSulary = {
        
        salary: salary,
        taxed: taxes,
        profit: profit
        
        }

        console.log(objSulary)
        
     }
     
     console.log(setInterval(getMySalary, 10000, ukraine));

    
        


