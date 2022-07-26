"use strict"
// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {
	constructor(university, course, fullName, mark) {
  	this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.mark = mark;
    this.dismissed = false;
  }

  

// 2. Cтворіть метод який повертає сукупну інформацію про курс, учбовий заклад та імені студента.
 
  get info() {
  	return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}` 
  }

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента
  
  get studentMarks() {
    if (this.dismissed == true) {
      return null;
    }
  
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
      } 
      else if (this.dismissed) {
        return null;
      }
      else {
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

 dismiss() {
  this.dismissed = true;
    return `${this.fullName} був виключений.`
 }

 recover() {
  this.dismissed = false;
    return `${this.fullName} був поновлений`
 }
}

const randomStudent = new Student('Міжнароднього Університету "Недостатньої Русофобії" м.Одеса', '1', 'Степан Бандера', [5, 4, 4, 5])

console.log(randomStudent.info)
console.log(randomStudent.studentMarks)
randomStudent.studentMarks = 5;
console.log(randomStudent.getAverageMark());
console.log(randomStudent.dismiss());
console.log(randomStudent.studentMarks)
console.log(randomStudent.recover());
console.log(randomStudent.studentMarks)


//  ---- ADVANCED  ----

// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
class BudgetStudent extends Student {
  constructor(university, course, fullName, mark) {
      super(university, course, fullName, mark)
      //Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту
        setInterval ( () => this.getScholarship(), 3000)
  }

/*Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. 
Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії */
getScholarship() {
  //Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
  if (!this.dismissed || this.getAverageMark() >= 4.0) {
      return console.log('Ви отримали 1400 грн. стипендії')
  } else {
    return null;
  }
}

}

const newStudent = new BudgetStudent('Міжнароднього Університету "роzzійсько-Української війни" м.Київ', '1', 'Василь Стус', [5, 4, 4, 5])  

console.log(newStudent.info)
newStudent.getScholarship()






