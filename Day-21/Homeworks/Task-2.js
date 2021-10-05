class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    let course = new Date().getFullYear() - this.year;
    return course > 4
      ? "The Student already finished studying"
      : course < 1
      ? "Something went wrong"
      : `${course} - ${
          course == 1
            ? "first"
            : course == 2
            ? "second"
            : course == 3
            ? "third"
            : "fourth"
        }course`;
  }
}

var student = new Student("John", "Smith", 2017);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(student.getCourse()); // print 4 - fourth course, because current year 2020
