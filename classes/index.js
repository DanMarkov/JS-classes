class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGreetings() {
        const fullName = this.getFullName();
        return `Hello, ${fullName}`;
    }

    getUpperCased() {
        return this.getGreetings().toUpperCase();
    }
}

const user1 = new User("Roxy","Rose");

console.log(user1.getUpperCased());