const seanBeanMovies = [
  "The Martian",
  "Percy Jackson & the Olympians: The Lightning Thief",
  "Far North",
  "The Island",
  "National Treasure",
  "Troy",
  "The Lord of The Rings: The Return of the King",
  "Equilibrium",
  "The Lord of The Rings: The Two Towers",
  "The Lord of The Rings: The Fellowship of the Ring",
  "Anna Karenina",
  "Goldeneye"
];

let moviesCopy = seanBeanMovies.slice(0);

const seanBeanShows = [
  "Curfew",
  "Medici",
  "Wasted",
  "Missing",
  "Legends",
  "Game of Thrones",
  "Crusoe",
  "Clarissa",
  "The Practice"
];

console.log("# Challenge #1");
// Create a function that console.logs every item in the movie list. Now call that function.
function printMovies(array) {
  for (arr in array) {
    console.log(array[arr]);
  }
}

printMovies(seanBeanMovies);

console.log("# Challenge #2");
// Create a function that console.logs every item in the TV list. Now call that function.
function printShows(array) {
  for (arr in array) {
    console.log(array[arr]);
  }
}

printShows(seanBeanShows);

console.log("# Challenge #3");
// There's an order to the array items, but only if you're a major tv or movie buff--or, like this project's author, a minor Sean Bean buff--would you notice;
//they're listed chronologically, newest first. Now write a function that consoles out the movies in oldest-first order, and call that function.

function printMoviesReverese(array) {
  for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printMoviesReverese(seanBeanMovies);

console.log("# Challenge #4");
// Now do the same as above, but for TV shows.

function printShowsReverese(array) {
  for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printShowsReverese(seanBeanShows);

console.log("# Challenge #5");
// Now that we know that our initial two functions don't just list the items, but list them in newest-first chronological order, change their names to give them as equally descriptive names as the ones you gave the oldest-first functions. (If you didn't give them descriptive names, do so now.) Then console out "Done!" below.

console.log("# Challenge #6");
// Write a function that, without any NEW loops, consoles out the movies list items individually followed by the tv list items individually, in chronological order of newest-first (not worrying about whether a movie is before a tv show!). What would you name such a beast? Got an idea? Then name it! And call it!

function printShowsAndMovies() {
  printShows(seanBeanShows);
  printMovies(seanBeanMovies);
}

printShowsAndMovies();

console.log("# Challenge #7");
// Do the same as above, but for oldest-first order.

function printShowsAndMovies() {
  printMoviesReverese(seanBeanMovies);
  printShowsReverese(seanBeanShows);
}

printShowsAndMovies();

console.log("# Challenge #8");
// Write a function that consoles out any movies in the Lord of the Rings series. Now call it!
function ringLords(array) {
  for (arr in array) {
    if (array[arr].startsWith("The Lord")) {
      console.log(array[arr]);
    }
  }
}

ringLords(seanBeanMovies);

console.log("# Challenge #9");
// Now write a function that consoles out the movies in alphabetical order, using Array.sort() (look up how to use it, but you shouldn't have to put anything in `.sort`'s parentheses!). Be SURE that you make a COPY of the array before you do so, as otherwise your function will re-arrange the original array and you'll lose the chronological ordering!
function movieSort(arr) {
  let arrSort = arr.slice(0);
  arrSort.sort();
  for (arr in arrSort) {
    console.log(arrSort[arr]);
  }
}

movieSort(seanBeanMovies);

console.log("# Challenge #10  &&  #11");
// Did you notice how the Lord of the Rings movies got sorted under "T" for "The"? We'd prefer they be listed under "L", because otherwise such titles can be very difficult to find.

// Declare the alphabetized copy of your array from the last function GLOBALLY, outside your function, near (but after) the seanBeanMovies definition at the top. Use a let to declare it, and make it a copy of the seanBeanMovies array, just like we did in the function originally.

// Modify your alphabetical printing function from the challenge above so that it changes that global array, without declaring a new array.

// Your alphabetical printing function should still work. Call it again at the end of this challenge!
function movieSortSwap(array) {
  arr = array.slice(0);
  arr.sort();
  let wordHold = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("The Lord")) {
      wordHold = arr[i].toString().split(" ");
      wordHold.shift();
      arr[i] = wordHold.join(" ");
    } else if (arr[i].startsWith("The")) {
      arr[i] = arr[i]
        .toString()
        .split(" ")
        .reverse()
        .toString();
    }
    console.log(arr[i]);
  }
}
//  swap = word1
//  word1 = word2
//  word2 = swap
//
movieSortSwap(moviesCopy);
//
// wordHold = moviesCopy[0].toString().split(" ").reverse().toString()
// console.log(wordHold)
// console.log(moviesCopy[0])
// moviesCopy[0] = wordHold;
// console.log(moviesCopy);
// Now that we've got things set up right, write a function that will change any title in your global array (which should, again, be a COPY of seanBeanMovies) from having "The" at the start to ", the" at the end. Be careful of spaces, and you SHOULD be modifying that array.

// Now call that function, followed by the alphabetical printing function. If you did it right, you'll change the titles to move "The" to the end, then print it in (better) alphabetical order.

// Your result should be:

// Anna Karenina
// Equilibrium
// Far North
// Goldeneye
// Island, the
// Lord of The Rings: The Fellowship of the Ring, the
// Lord of The Rings: The Return of the King, the
// Lord of the Rings: The Two Towers, the
// Martian, the
// National Treasure
// Percy Jackson & the Olympians: The Lightning Thief
// Troy

console.log("# Challenge #12");
// Now call the first function you made. If you correctly didn't modify the original array, it should give you the same console results. If it does: /////congratulations! You did it! You're done!
printMovies(seanBeanMovies);
