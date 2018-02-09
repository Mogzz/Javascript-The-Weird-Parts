var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var morgan = {
  firstname: "Morgan",
  lastname: 'Parry'
}

for (var prop in person) { //loops over every property and method in am object
  console.log(prop + ': ' + person[prop]);
}
//Function Contructor used to build new objects
function Person(first, last) { //function constructors should have capitilized first letter
  this.firstname = first;
  this.lastname = last;

}
//Every function comes with a prototype and property and methods can be added
//Methods should be added to a prototype and allow propertys to be added to the actual function
//Doing this saves memory space as only one function is created.. if added to main function
//Thousands could be created
Person.prototype.fullName = function() {
  return this.firstname + " " + this.lastname;
}

//john and jane objs share prototype of Person fucntion
var john = new Person("John", "Doe"); // new creates empty object
console.log(john);
var jane = new Person("Jane", "Doe");
console.log(jane);

console.log(jane.fullName());


//Create objects - Object.created

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var morgan = Object.create(person);
morgan.firstname = "Morgan";
morgan.lastname = "Parry";

console.log(morgan.greet());