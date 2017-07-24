// # JS Day 1 Homework

// Go through each sample code and work out what the output will be and explain what happened.

// ### Episode 1
// When printName() is called, the output will be: 'My name is Keith' as the variable name is accessible to the function definition and there is no local variable defined within the function.

// ```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
// ```

// // ### Episode 2
// When console.log(result()) is called, the output will be 3 as the function returns the local variable var score = 3 as declared in the function body.
// ```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// ```

// ### Episode 3
// When listAnimals() is called, the output will be 0: Ducks, 1: Dogs, 2: Lions because the function iteratures through the myAnimals list declared within the function body not the var myAnimals declared above (it reassigns the variable at this point) returnign the index position and the item.
// ```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// ```

// ### Episode 4
// When the allSuspects() function is called the output to the console will be 'Suspects include: Jay, Val, Harvey, Rick' as var suspectThree is reassigned to 'Harvey in the body of the function'
// The 'Suspect three is: Keith' will be the output, as the console.log method only has access to the original var suspectThree 'Keith' not the reassigned var within the function's body.

// ```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// ```

// // ### Episode 5
// When the console.log is called the output will be: Poirot as the printName method takes in a detective object which has name and pet and returns only the value assigned to the name via the detective.name getter. The value for the name (orignially Ace Ventura in the object) is reassigned within the detectiveInfo function to 'Poirot'.

// // ```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// ```

// ### Episode 6
// The console output will be 'the murderer is rick' because althoug valerie is a global variable, the outerFunction (and innerFunction within it) do not return anything or print anything to console so 'rick' is the only accessible var mureder to the console.log when it is called.
// ```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// ```

// ### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.