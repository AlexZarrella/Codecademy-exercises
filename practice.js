// Exercise 1:

const sentence = ['sense.','make', 'all', 'will', 'This'];
function reverse(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}

//Exercise 2

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];


function greetAliens(aliens) {

  for(var i=0; i < aliens.length; i++) {

    console.log("Oh powerful " + aliens[i] + ", we humans offer our unconditional surrender!")
  
    }
}
greetAliens(aliens)

//Exercise 3

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];


function convertToBaby(animals) {
  newArray = [];
  for (var i=0; i < animals.length; i++) {
    newArray.push("baby " + animals[i])
  }
console.log(newArray)

}
convertToBaby(animals)

//Exercise 4
const numbers = [5, 3, 9, 30];

 const smallestPowerOfTwo = arr => {
       let results = [];
       // The 'outer' for loop - loops through each element in the array
       for (let i = 0; i < arr.length; i++) {
             number = arr[i];

             // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             j = 1;
             while (j < number) {
                   j = j * 2;
             }
             results.push(j);
       }
       return results
 }

 console.log(smallestPowerOfTwo(numbers)) 

 //Exercise 5

 const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

 const politelyDecline = (veg) => {
       console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
 }
 
 function declineEverything(arr) {
   arr.forEach(function(veg){
     console.log(politelyDecline(veg))
 
   })
 }
 declineEverything(veggies);
 
 function acceptEverything(arr) {
   arr.forEach(function(veg) {
     console.log("Ok, I guess I will eat some " + veg + ".")
   })
 }
 acceptEverything(veggies);

 //Exercise 6
 const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num


  var newArray = numbers.map(function squareNums(num){
    return num * num;
  })
  console.log(newArray);

  //Exercise 7
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];


var newArray = greetings.map(function shoutGreetings(arr) {
return arr.toUpperCase();
})

console.log(newArray);

//Exercise 8
const years = [1990, 2018, 1993, 2006, 1998];

function sortYears(arr) {
  console.log(arr.sort());
}
sortYears(years);




