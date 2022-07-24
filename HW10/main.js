"use strict"
// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {
	constructor(university, course, fullName, mark) {
  	this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.mark = mark;
  }

// 2. Cтворіть метод який повертає сукупну інформацію про курс, учбовий заклад та імені студента.
 
  get info() {
  	return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}` 
  }

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента
  
  get studentMarks() {
  	return this.mark;
  }

/* 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5] */
  
set studentMarks(marks) {
      // Створюємо умову 
      if (Number(marks) === 0 || Number(marks) > 5) {
        console.log('Будь ласка введіть оцінку в діапазоні 1 - 5');

      // Вказуємо поточну умову для оцінкок, проходять числа з 1 по 5. Та пушимо в наш масив "mark" написану нами оцінку  
     } else if (Number(marks) > 0 || Number(marks) < 6) {
        this.mark.push(Number(marks));
        console.log(randomStudent.studentMarks)

      } else {
        console.log('Ви можете використовувати тільки оцінки 1-5, інші значення неможливі');
      }
  }

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

    getAverageMark() {

    const sum = this.studentMarks.reduce((prev, item) => {
    	return prev + item;
    })
    
    return (sum / this.studentMarks.length)
}

/* 6. Створіть метод this.dismiss, який "виключить" студента. 
 Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
 (Ніяких помилок, просто повертається завжди null замість масиву оцінок) */

 

}

const randomStudent = new Student('Міжнароднього Університету "Недостатньої Русофобії" м.Одеса', '1', 'Степан Бандера', [5, 4, 4, 5])

console.log(randomStudent.info)
console.log(randomStudent.studentMarks)
randomStudent.studentMarks = 5;
console.log(randomStudent.getAverageMark())




