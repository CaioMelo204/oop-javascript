class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18
    }
} 

class Student extends Person {
    courses = [];

    constructor(firstName, lastName, age, courses) {
        // Super need to be the first
        super(firstName, lastName, age)
        this.courses = courses || []
    }

    enroll(course) {
        this.courses.push(course)
    }

    // Polimorfism
    isAdult() {
        return this.age >= 30
    }
}

let sandino = new Student('Sandino', 'Melo', 26, [{ courseId: 'CS102' }])
sandino.enroll({ courseId: 'CS101' })
console.log(sandino.courses)
console.log(sandino.firstName)
console.log(sandino.isAdult())
console.log(sandino instanceof Student)
console.log(sandino instanceof Person)
