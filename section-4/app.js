(function() {









})();

function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push( //this will push in the function to the array
      function() {
        console.log(i);
      }
    );

  }

  return arr;

}

var fs = buildFunctions();
fs[0](); //when the function of the array is invoked.. it will reference
fs[1](); // i = 3
fs[2]();


function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push( //this will push in the function to the array
      (function(j) {
        return function() {
          console.log(j); //wrapping this in an IIFE will allow us to access the value of i at time of creation instead of execution
        }
      }(i)) // i is passed as an arg and stored as j .. allowing us to access it at time of creation
    );

  }

  return arr;

}
var fs2 = buildFunctions2();
fs2[0](); //when the function of the array is invoked.. it will reference
fs2[1](); // i = 3
fs2[2]();

//Making use of closures...

function buildGreetings(lang) { // A function that returns a function
  return function(first, last) { // this function is stored in a variable when buildGreetings is invoked
    console.log(first, last, lang);
  }
}

var personOne = buildGreetings("English"); //pass english as args and becomes referenced
var personTwo = buildGreetings("Spanish"); //pass spanish as arge and becomes referenced

personOne("John", "Doe");
personTwo("Jane", "Doe");

// Call back functions!

function tellMeWhenDone(callback) {

  var a = 1000; // do some work
  var b = 2000; // do some work

  callback(); // the call back to run

}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function() {
  alert('I am done!');
});