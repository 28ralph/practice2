// Part II: JavaScript Reps

// Easy Going

//     Write a for loop that will log the numbers 1 through 20.

// for(let i = 1; i<= 20; i++){
//     console.log(i)
// }

// Get Even

//     Write a for loop that will log only the even numbers in 0 through 200.

//         Hint: Think about the increment expression.

// for(let i = 0; i<=200; i += 2){
//     console.log(i)
// }
// Fizz Buzz

// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

//     Write a javascript application that logs all numbers from 1 - 100.

// for(let i=1; i <= 100; i++){
//     console.log(i)
// }

// If a number is divisible by 3 log "Fizz" instead of the number.

// for(let i=1; i <= 100; i++){
//     if (i % 3===0){
//     console.log("Fizz")}
//     else{
//         console.log(i)
//     }
// }

// If a number is divisible by 5 log "Buzz" instead of the number.

// for(let i=1; i <= 100; i++){
//     if (i % 5===0){
//     console.log("Buzz")}
//     else{
//         console.log(i)
//     }
// }

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for(let i=1; i <= 100; i++){
//         if (i % 3===0 && i %5 ===0){
//         console.log("FizzBuzz")}
//         else{
//             console.log(i)
//         }
//     }

// Wild Wild Life

// Use the following arrays to answer the questions below (name,species ,age, hometown):
//  You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee[2]++
// console.log(plantee)

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City"

// console.log(wolfy)

// Give D'Art a second hometown by adding "Hawkins"

// dart.push("Hawkins")
// console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore. 
// Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// wolfy[0] = "Gameboy"
// console.log(wolfy)

// Yell at the Ninja Turtles

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// console.log(ninjaTurtles)

// Use a for of loop (not a typo - try it out! Try a for of loop)
//  to call toUpperCase() on each of them and print out the result.

//  for(let i = 0; i <ninjaTurtles.length; i++){

//     console.log(ninjaTurtles[i].toUpperCase())
//  }


// const favMovies = ['Jaws', 'The Fellowship of the Ring', 
// 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas',
//  'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
//  'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
//  'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//  console.log(favMovies.indexOf("Titanic"))

//  Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

//  Note: if you have to add to the array, feel free to add any movie you'd like
//  use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

// console.log(favMovies.sort())

// Use the method pop

// favMovies.pop()
// console.log(favMovies)

// push "Guardians of the Galaxy"

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// Reverse the array

// favMovies.reverse()
// console.log(favMovies)

// Use the shift method

// favMovies.shift()
// console.log(favMovies)

// unshift - what does it return?

// "unshift returns the new length of the array after adding element at the beginning of the array"

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained",
//  instead of counting it yourself) Thought question: did this permanently alter our array?

//  console.log(favMovies)
//  favMovies.splice(14,1, "Avatar")
//  console.log(favMovies)

//  slice the last half of the array (challenge yourself and try to programatically
//      determine the middle of the array rather than counting it and hard coding it) -
//   Thought question: did this permanently alter our array?

// let half = favMovies.length/2

// store the value of your slice in a variable, console.log it - Thought question: what is going on here?

// const movies = favMovies.slice(half,favMovies.length)
// console.log(movies)

// answer: "the slice method return selected elements in array as a new array"

// console.log(favMovies)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we 
// look for the index of something that is not in the array?

// console.log(favMovies.indexOf("Fast and Furius"))

// answer: "it returned a negative 1 (-1)"

// Thought question: that we declared the variable favMovies with const, and yet,
//  we were allowed to change the array. Weird? Should we have used let?

//  answer: "We can change elements in a const array but we cannot redifine it. If we use let then
//  we can redefine the whole array. see example below:"

//  //const array = ["Hello", "World"]
//  //array[0] = "Hi" // valid
//  //array = ["How", "are", "you"] // invalid

// Where is Waldo

//     With the following multi-dimensional array

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];


// Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.slice(1,1)

// console.log(whereIsWaldo)

// Change "Neff" to "No One"

// whereIsWaldo[2][2] = "No One"
// console.log(whereIsWaldo)




// Access and console.log "Waldo"

// console.log(whereIsWaldo[3][1][1])

// Excited Kitten

//     Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for(let i = 0; i<20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
// }

// For every even number in your loop, log "...human...why you taking pictures of me?...",
//  "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// let x = 0;
// let word = ""

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         x = Math.floor(Math.random() * 3)
//         if (x === 0) {
//             word = "...human...why you taking pictures of me?..."
//         }

//         if (x === 1) {
//             word = "...the catnip made me do it..."
//         }

//         if (x === 2) {
//             word = "...why does the red dot always get away..."
//         }
//         console.log(i  + word)
//     }
// }

// Find the Median

//     Find the median number in the following nums array, then console.log that number.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const numSort = nums.sort()
const number = Math.floor(nums.length/2)
console.log(numSort[number])


