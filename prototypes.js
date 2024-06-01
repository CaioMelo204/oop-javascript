let Person = {
    firstName: '',
    lastName: '',
    age: 0,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let jim = { firstName: 'Sandino', lastName: 'Melo' }
Object.setPrototypeOf(jim, Person)

console.log(jim.fullName())

console.log(Object.getPrototypeOf(jim))

console.log(Person.hasOwnProperty('age'))
console.log(jim.hasOwnProperty('age'))

let Student = {
    enrolledCourses: [],
    enroll(course) {
        this.enrolledCourses.push(course)
    }
}

Object.setPrototypeOf(Student, Person)

sandino = { firstName: 'Sandino', lastName: "Melo", age: 22 }

Object.setPrototypeOf(sandino, Student)

sandino.enroll({ courseId: 'CS101' })
console.log(sandino.enrolledCourses)
console.log(sandino.fullName())
console.log(Person.hasOwnProperty('age'))