function Parent(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  
  Parent.prototype.yabbaDabba = function () {
    return 'Yabba dabba doo!';
  };
  
  Parent.prototype.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
  
  const fred = new Parent({gender: 'Male', age: 35, name:'Fred', homeTown:'Bedrock'});
  
  const wilma = new Parent({gender: 'Female', age: 37, name: 'Wilma', homeTown: 'Bedrock'});
  
  console.log("***** Parents *****");
  console.log("1.", fred);
  console.log("2.", fred.speak());
  console.log("3.", wilma);
  console.log("4.", wilma.speak());
  
  function Child(attributes) {
    this.isChild = attributes.isChild; // a special attribute to Child
    Parent.call(this, attributes); // binding to Parent
  }
  
  Child.prototype.checkIfChild = function () {
    return `My name is ${this.name}.`;// \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
  };
  
  Child.prototype = Object.create(Parent.prototype);
Child.prototype.checkIfChild = function () {
    return `My name is ${this.name}.`;// \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
};
  
  const pebbles = new Child({gender:'Female', age: 3, name: 'Pebbles', homeTown: 'Bedrock', isChild: true});
  
  console.log("***** Child *****");
  console.log("5.", pebbles);
  console.log("6.", pebbles.speak());
  console.log("7.", pebbles.checkIfChild());
  console.log("8.", pebbles.yabbaDabba());

//   Add a method to the User class called changeUsername()

// This method should receive one parameter username, a string representing a new username for the user1 object.
// This method should not return anything
// Inside the method, update the value of the username property to the value of the username parameter
class User {
    constructor(email, username, birthday) {
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
  changeUsername(username) {
    this.username = username;
  }
}

var user1 = new User('JavaScriptStudent@teamtreehouse.com', 'JSUser1', '1/08/1991');