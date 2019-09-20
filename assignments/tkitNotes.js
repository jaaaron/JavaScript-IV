/*
Inheritance w/ Classes
Inheritance is where classes really shine. The extends keyword, and super(); function make it so trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we’re used to. super() is used to tell a parent’s constructor to be concerned with the child’s attributes vis versa and abstracts away the Object.create(this, Class) syntax that is really tricky to sink one’s teeth into.

Here’s how Object inheritance works with classes:
*/

class Animal { 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
// sub-class
class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  // using this child class
  const doggy = new Dog('Grizzly');

  doggy.speak();