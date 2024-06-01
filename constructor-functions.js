function Person(firstName, lastName, age) {
    // private property
    let adultAge = 18
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // this.fullname = function() {
    //     return `${this.firstName} ${this.lastName}`
    // }
    this.getYearsToAdult = function() {
        return adultAge - this.age
    }

    function isAdultPrivate() {
        return this.age >= adultAge
    }

    //Private Methods
    this.isQualified = function() {
        return isAdultPrivate.call(this)
    }
}

// Static Property
Person.adultAge = 18

// Static Methods
Person.isAdult = function(age) {
    return age >= Person.adultAge
}

Person.prototype = {
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(fullName) {
        let nameParts = fullName.split(' ')
        this.firstName = nameParts[0]
        this.lastName = nameParts[1]
    },
    isAdult: function() {
        return this.age >= Person.adultAge
    } 
}

// Person.prototype.fullname = function () {
//     return `${this.firstName} ${this.lastName}`
// }

let sandino = new Person('Sandino', 'Melo', 26)

console.log(sandino)
sandino.fullName = 'Sandino 204'
console.log(sandino.fullName)
console.log(sandino.hasOwnProperty('firstName'))
console.log(sandino.isAdult())

//Static Methods
console.log(Person.isAdult(10))
console.log(Person.isAdult(19))

// Encapsulation
console.log(sandino.getYearsToAdult())
console.log(sandino.adultAge)

//Private Methods
console.log(sandino.isQualified())
console.log(sandino.isAdultPrivate)

let course = { requiredAge: Person.adultAge }

console.log(course)