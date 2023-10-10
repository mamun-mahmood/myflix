function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
Person.prototype = {
  eat() {
    console.log(this.name, " is eating");
  },
  sleep() {
    console.log(this.name, " is sleeping");
  },
  play() {
    console.log(this.name, " is playing");
  },
};
const sakib = Person("Sakib", 35);
const tamim = Person("Tamim", 36);
// sakib.eat();
const arr = new Array();
console.log(arr.prototype);
