class User {
    constructor(firstName, lastName, prefix, age) {
        this.fisrtName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName(){
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote(){
        return this.age >= 18;
    }
}


// Sample usage - do not modify
const user1 = new User("Kate", "Smith", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Kate Smith"
console.log(user1.canVote()); // true

const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false