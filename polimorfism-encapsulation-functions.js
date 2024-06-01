function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.isAdult = function() {
        return this.age <= 18
    }
}

Person.prototype.isAdult = function() {
    return this.age >= 18;
}

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age)
    this.courses = []
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.enroll = function(course) {
    this.courses.push(course)
}
// Method Polimorfism
Student.prototype.isAdult = function() {
    return this.age <= 30
}

let sandino = new Student('Sandino', 'Melo', 26)
sandino.enroll({ courseId: 'CS100' })
console.log(sandino.courses)
console.log(sandino.firstName)
console.log(sandino.isAdult())
console.log(sandino)
console.log(sandino.constructor.toString())
console.log(sandino instanceof Student)
console.log(sandino instanceof Person)

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`
}

console.log(getFullName(sandino))
console.log(getFullName({ firstName: 'Sandino', lastName: 'Melo' }))

console.log(sandino.isAdult())
