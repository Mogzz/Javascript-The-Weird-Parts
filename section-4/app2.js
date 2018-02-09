function mapForEach(arr, fn) { //create function that takes an array and function to run

  var newArr = []; //store new array here
  for (var i = 0; i < arr.length; i++) { //loop thru passed array
    newArr.push(
      fn(arr[i]); //run user function on array

    );
  }
  return newArr; // return the new array
}

var arr1 = [1, 2, 3];
var arr2 = mapForEach(arr1, function(item) { //pass arr2 to our function and provide call back for what to do
  return item * 2;
});

var checkPastLimit = function(limiter) { //this function allows us to pass a limit and have the item already available
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr3 = mapForEach(arr1, checkPastLimit(limiter))