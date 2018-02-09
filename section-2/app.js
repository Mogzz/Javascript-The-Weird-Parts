var x = [
  5, 6, 7, 8
];
var y = "hello world";
var z = "!";

function foo(x, y, z) {
  for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
  }

  console.log(y);
  console.log(z);
}


foo(x, y, z);


var person = {
  firstname: "Morgan"
};

foo.language = "English";

console.log(foo.language);

function log(a) {
  a();
}

log(function() {
  console.log("Hello");
});



// 'This' refers to the object its referenced in.
// internal functions run in to a problem so its best
//practice to set variable = this.


//function statement
var someone = {
  name: "This is the someone object!",
  log: function() {
    var self = this;
    self.name = 'updated object';
    console.log(self);


    //function expression
    var setname = function(newname) {
      self.name = newname;
    }
    setname("updated again!");
    console.log(self);
  }
}

someone.log();


// using an immediately invoked function expression (IIFE)
var greeting = function(name) {
  console.log("Hello " + name);
}();