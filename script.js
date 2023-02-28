/* 
Assignments for the week starting 2/27/2023

Challenges:
1) Write a program that counts (logs) to 10 by 2's.
*/


e = 0
function twoCount() {
  while (e <= 10) {
    console.log(e)
    e++, e++
  }
}

twoCount()

/*
2) Write a program to extract out values from an array given an array of indicies:

IE: 
// removeByIndicies(['a', 'b', 'c'], [0, 2]) => ['a', 'c']
*/

arrayOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
extract = [0, 2, 4, 6, 8]

function removeIndicies(array, extract) {
  let newArray = []
  for (u of extract) {
    newArray.push(array[u])
  }
  console.log(newArray)
}

removeIndicies(arrayOne,extract)

/*
3) Write a program that invokes a function a given amount of times. It should return an array where each element is the return value of said function.

IE:
// times(myFunction, 5) => [myFunction output, myFunction output, myFunction output, myFunction output, myFunction output]
*/

function timesRepeat(value, times) {
  const workingArray = []
  let r = 0
  while (r < times){
    workingArray.push(value)
    r++
  }
  return workingArray
} 

console.log(timesRepeat('myFunction',5))

/*
4) FizzBuzz
Log a range from 1-n, where 'n' is a max value.
Values that are divisible by 3 should log as "Fizz",
Values that are divisible by 5 should log as "Buzz"
Values that are both divisible by 3 and 5 should log as "FizzBuzz".
*/

function fizzBuzz(range) {
  for (let fizz = 1; fizz < range; fizz++) {
    if (fizz % 15 == 0) {
      console.log("FizzBuzz")
    }
  
    else if (fizz % 3 == 0) {
      console.log("Fizz")
    }
  
    else if (fizz % 5 == 0) {
      console.log("Buzz")
    }
  
    else {
      console.log(fizz)
    }
  }
}

fizzBuzz(101)