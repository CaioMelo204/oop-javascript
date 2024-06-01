class Person {         
    // Static Property
    static adultAge = 18

    //Private Property
    #oldAge = 65

    // Constructor
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method
    isAdult() {
        return this.age >= Person.adultAge;
    }

    // Private Method
    #isOld() {
        return this.age >= this.#oldAge;
    }

    isQualified() {
        return this.isAdult && !this.#isOld()
    }

    // Static Method
    static isAdult(age) {
        return age >= Person.adultAge
    }

    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter
    set fullName(fullName) {
        let nameParts = fullName.split(' ')
        this.firstName = nameParts[0]
        this.lastName = nameParts[1]
    }
}

let sandino = new Person('Sandino', 'Melo', 26)
console.log(sandino)
console.log(sandino.isAdult())
sandino.fullName = 'Sandino 204'
console.log(sandino.fullName) 

let course = { requiredAge: Person.adultAge }
console.log(course)

console.log(Person.isAdult(10))

console.log(Person.isAdult(30))

console.log(sandino.isQualified())