/* 1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence.
Your program should take a number as input. That number should be the number
of sheep you have. The function should display the number along with the message
"Another sheep jumps over the fence" until no more sheep are left. */

function countSheep(num){
  if(num === 0){
    console.log('All sheep jumped over the fence');
  } 
  else{
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num-1);
  }
}

countSheep(3);

/* 2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer
as a base, and another integer as an exponent. The function returns the value of
the base raised to the power of the exponent. Use only exponents greater than or
equal to 0 (positive numbers) */

const powerCalculator = function(baseInt, exponentInt){
  if(exponentInt === 1){
    return baseInt;
  }
  return baseInt * powerCalculator(baseInt, (exponentInt -1));
};

console.log(powerCalculator(10, 2));

/* 3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string,
and return the new string. */
function reverse(str) {
  if (str.length < 2) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse('hello'));

/* 4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can
form an equilateral triangle. The nth triangular number is the number of dots composing
a triangle with n dots on a side, and is equal to the sum of the n natural numbers from
1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */

function nthTriNumber(n){
  if(n < 2){
    return n;
  } 
    return n + nthTriNumber(n-1);
}
  
nthTriNumber(10);

/* 5. String Splitter
Write a recursive function that splits a string based on a separator (similar to
String.prototype.split). Don't use JS array's split function to solve this problem. */

function split(str, sep) {
  let x = str.indexOf(sep);
  if (x == -1) 
    return [str];
  return [str.slice(0, x)].concat(split(str.slice(x + sep.length), sep));
}

console.log(split('2/20/2020', '/'));

/* 6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number.
The Fibonacci sequence is a series of numbers in which each number is the sum of
the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci
sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

function fibonacci(n) {
  if (n <= 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

console.log(fibonacci(5));

/* 7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial
of a number can be found by multiplying that number by each number between itself and 1.
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. */

function factorial(n) {  
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

/* 8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one
possible paths through the Maze to the single exit point. Write a recursive function
that will help you find a possible path through the maze.*/

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const exitMaze = function(maze) {
    let rows = maze.length;
    let columns = maze[0].length;
    const blocks = [];
    const path = ["0,0"];
    let directions = "";
    
    for(i=0; i < rows; i++) {
     for(j=0; j < columns; j++){
       if (maze[i][j] === '*')
       blocks.push(`${i},${j}`)
     } 
    }

    console.log(blocks);
    return findPath(rows, columns, blocks, path, directions, 0, 0);
   }
    
   const findPath = function(rows, columns, blocks, path, directions, row, col) {
     let nextRow = row;
     let nextCol = col;
   
     if(`${nextRow},${nextCol}` === `${rows - 1},${columns - 1}`) {
       console.log(directions);
       return directions;
     }
   
     const blocksCheck = function(str) {
       return blocks.includes(str);
     }
   
     const pathCheck = function(str) {
       return path.includes(str)
     }
     
     // Up
     if(blocksCheck(`${nextRow - 1},${nextCol}`) === false && pathCheck(`${nextRow - 1},${nextCol}`) === false && !(nextRow - 1 < 0)) {
       directions+= "U";
       nextRow = nextRow - 1;
       path.push(`${nextRow},${nextCol}`)
     } else if
     
     // Down
     (blocksCheck(`${nextRow + 1},${nextCol}`) === false && pathCheck(`${nextRow + 1},${nextCol}`) === false && !(nextRow + 1 > rows - 1)) {
       directions+= "D";
       nextRow = nextRow + 1;
       path.push(`${nextRow},${nextCol}`)
     } else if

     // Left
     (blocksCheck(`${nextRow}, ${nextCol - 1}`) === false && pathCheck(`${nextRow},${nextCol - 1}`) === false && !(nextCol - 1 < 0)) {
       directions+= "L";
       nextCol = nextCol - 1;
       path.push(`${nextRow},${nextCol}`);
     } else

     // Right
     if(blocksCheck(`${nextRow},${nextCol + 1}`) === false && pathCheck(`${nextRow},${nextCol + 1}`) === false && !(nextCol + 1 > columns)) {
       directions+= "R";
       nextCol = nextCol + 1;
       path.push(`${nextRow},${nextCol}`)
     }
     return findPath(rows, columns, blocks, path, directions, nextRow, nextCol)
   }
   
   console.log(exitMaze(maze));

/* 9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths
through the Maze. To find all possible exit paths through the maze, think about how
many places you can move at each turn. Possibly up, down, left or right? Notice that
this maze has 3 exits paths. Your recursive function should print all three of the
paths with the proper directions. */

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  const exitMaze = function(maze) {
    let rows = maze.length;
    let columns = maze[0].length;
    const blocks = [];
    const path = ["0,0"];
    let directions = "";
    
    for(i=0; i < rows; i++) {
     for(j=0; j < columns; j++){
       if (maze[i][j] === '*')
       blocks.push(`${i},${j}`)
     } 
    }

    console.log(blocks);
    return findPath(rows, columns, blocks, path, directions, 0, 0);
   }
    
   const findPath = function(rows, columns, blocks, path, directions, row, col) {
     let nextRow = row;
     let nextCol = col;
   
     if(`${nextRow},${nextCol}` === `${rows - 1},${columns - 1}`) {
       console.log(directions);
       return directions;
     }
   
     const blocksCheck = function(str) {
       return blocks.includes(str);
     }
   
     const pathCheck = function(str) {
       return path.includes(str)
     }
     
     // Up
     if(blocksCheck(`${nextRow - 1},${nextCol}`) === false && pathCheck(`${nextRow - 1},${nextCol}`) === false && !(nextRow - 1 < 0)) {
       directions+= "U";
       nextRow = nextRow - 1;
       path.push(`${nextRow},${nextCol}`)
     } else if

     // Down
     (blocksCheck(`${nextRow + 1},${nextCol}`) === false && pathCheck(`${nextRow + 1},${nextCol}`) === false && !(nextRow + 1 > rows - 1)) {
       directions+= "D";
       nextRow = nextRow + 1;
       path.push(`${nextRow},${nextCol}`)
     } else if

     // Left
     (blocksCheck(`${nextRow}, ${nextCol - 1}`) === false && pathCheck(`${nextRow},${nextCol - 1}`) === false && !(nextCol - 1 < 0)) {
       directions+= "L";
       nextCol = nextCol - 1;
       path.push(`${nextRow},${nextCol}`);
     } else

     // Right
     if(blocksCheck(`${nextRow},${nextCol + 1}`) === false && pathCheck(`${nextRow},${nextCol + 1}`) === false && !(nextCol + 1 > columns)) {
       directions+= "R";
       nextCol = nextCol + 1;
       path.push(`${nextRow},${nextCol}`)
     }
     return findPath(rows, columns, blocks, path, directions, nextRow, nextCol)
   }
   
   console.log(exitMaze(maze));

/* 10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject")
word or phrase in another, rearranged order. Write a function that creates an
anagram list, listing all the rearrangements of a given word. For example, if
the user types "east", the program should list all 24 permutations, including
"eats", "etas", "teas", and non-words like "tsae". */

function logAnagram(word){
  anagrams(' ', word);

}
function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1);
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}

logAnagram('east');

// 11. Org Chart
// Write a recursive function that prints the following organization chart. Your
// output should be as shown below with proper indentation to show the hierarchy.
// You may store the org chart in an object and send that as an input to your program.

let organization = {
  'Zuckerberg': {		
    'Schroepfer': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao': {
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};

function orgChart(node, indent=0) {
  for (let key in node) {
    console.log(' '.repeat(indent), key);
    orgChart(node[key], indent + 4);
  }
}

console.log(orgChart(organization));


/* 12. Binary Representation
Write a recursive function that prints out the binary representation of a given number.
For example, the program should take 3 as an input and print 11 as output, or 25 as an
input and print 11001 as an output. Note that the binary representation of 0 should be 0. */

function toBinary(x){
  if (x < 0) {
    throw new Error('Negative numbers not acceptable');
  }
  if (x === 0 || x === 1){
    return x.toString();
  }
  const lsb = x % 2;
  const remainingBits = Math.floor(x / 2);
  const remainingBitsInBinary = toBinary(remainingBits);
  return remainingBitsInBinary + lsb; 
}

console.log(toBinary(3));