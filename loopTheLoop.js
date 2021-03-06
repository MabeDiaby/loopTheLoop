//Part 1: It's Hip to Be Square

//Make a function that that squares each number passed into it from an array, and sums the results.

function sumOfSquares(arr){
  //your code here!
  return arr.reduce((a,b) => {
	 return  a + b * b ;
  }, 0)
}

console.log(sumOfSquares([1,2,2]))

//Part 2: Loop the Loop: 2D Array Addition
//Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

function loopTheLoop(arr){
  //your code here!
  const rowSum = Math.max(
	  ...arr.map(item => {
		  return item.reduce((acc, curr) => acc + curr, 0)
	  })
  )
  console.log('row', rowSum);

  const temp = []

  for (let i = 0; i<arr.length; i++){
	  for (let j = 0; j < arr.length; j++){
		  row.push(arr[j][i])
	  }
	  temp.push(row)
  }
  const columnSum = Math.max(
	  ...temp.map(item => {
		  return item.reduce((acc, curr) => acc + curr, 0)
	  })
  )

  console.log('here', columnSum);

  const ltr = arr.map ((item, index))

  const diagonalSum = 0
}

const arr =[[10, 20, 30],
            [40, 50, 60],
            [70, -80, 90]];

console.log(loopTheLoop(arr)); //180

//## Part 3: Bonus - Row, Column or Diagonal?
//Test your function on this data set and let me know if it was a row, column or diagonal that had the greatest sum!

const bigArray = [
	[887, -541, -430, -590, 117, 172, -319, -18],
	[-269, 964, 209, 840, -456, 156, 365, -568],
	[289, -41, 488, 198, 240, 124, -427, 214],
	[452, 894, 968, -149, 683, 977, 741, -805],
	[181, -714, -950, 107, 800, 751, -143, 380],
	[152, 493, 707, 914, 37, 356, -625, 608],
	[-345, 906, 83, 676, 723, 381, 557, -183],
	[199, -943, -710, 565, 193, 315, 281, 245]
];

function greatestSum(arr){
  //your code here!
}

//## Part 4: Super Bonus - Generate 2D Arrays

//Part A
// Create a function that takes one argument, an integer, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

function generateArray(num){
  //your code here!
}

//Part B
// Add a 30% chance that the integer will become negative.
