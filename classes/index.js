class User {
  get age() {
    console.log('age getter');
    return this._age;
  }

  set age(value) {
    console.log('age setter');
    this._age = Number.parseInt(value, 10);
  }
}

const user = new User();
user.age = '20'; // calls set age(value)
console.log(user.age); // calls get age(), returns 20
