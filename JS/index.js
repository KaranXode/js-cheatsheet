const titleList = [
  {
    title: "Console",
    code: ` // => Hello world!
        console.log('Hello world!');
        
        // => Hello Karan
        console.warn('hello %s', 'Karan');
        
        // Prints error message to stderr
        console.error(new Error('Oops!'));
        `,
  },

  {
    title: "Numbers",
    code: `let amount = 6;
        let price = 4.99;
        `,
  },
  {
    title: "Variables",
    code: `let x = null;
            let name = "Tammy";
            const found = false;

            // => Tammy, false, null
            console.log(name, found, x);

            var a;
            console.log(a); // => undefined
            `,
  },
  {
    title: "Strings",
    code: `let single = 'Wheres my bandit hat?';
            let double = "Wheres my bandit hat?";

            // => 21
            console.log(single.length);`,
  },

  {
    title: "Arithmetic Operators",
    code: `5 + 5 = 10     // Addition
            10 - 5 = 5     // Subtraction
            5 * 10 = 50    // Multiplication
            10 / 5 = 2     // Division
            10 % 5 = 0     // Modulo
            `,
  },
  {
    title: "Comments",
    code: `// This line will denote a comment

            /*  
            The below configuration must be 
            changed before deployment. 
            */

            `,
  },
  {
    title: "Assignment Operators",
    code: `let number = 100;

        // Both statements will add 10
        number = number + 10;
        number += 10;
        
        console.log(number); 
        // => 120
        `,
  },
  {
    title: "String Interpolation",
    code: "Wait",
  },

  {
    title: "let Keyword",
    code: `let count; 
            console.log(count); // => undefined
            count = 10;
            console.log(count); // => 10
            `,
  },
  {
    title: "const Keyword",
    code: `const numberOfColumns = 4;

        // TypeError: Assignment to constant...
        numberOfColumns = 8;
        `,
  },
  {
    title:"if Statement",
    code:`const isMailSent = true;

    if (isMailSent) {
      console.log('Mail sent to recipient');
    }
    `,
  },
  {
    title:"Ternary Operator",
    code:`var x=1;

    // => true
    result = (x == 1) ? true : false;
    `
  },
  {
     title:"Opertors",
     code:`true || false;       // true
     10 > 5 || 10 > 20;   // true
     false || false;      // false
     10 > 100 || 10 > 20; // false
     `,
  },
  {
    title:"Logical Operator &&",
    code:`true && true;        // true
    1 > 2 && 2 > 1;      // false
    true && false;       // false
    4 === 4 && 3 > 1;    // true
    `,

  },
  {
    title:"Comparison Operators",
    code:`1 > 3                // false
    3 > 1                // true
    250 >= 250           // true
    1 === 1              // true
    1 === 2              // false
    1 === '1'            // false
    `,
  },
  {
    title:"Logical Operator !",
    code:`let lateToWork = true;
    let oppositeValue = !lateToWork;
    
    // => false
    console.log(oppositeValue); 
    `,
  },
  {
    title:"Nullish coalescing operator ??",
    code:`null ?? 'I win';           //  'I win'
    undefined ?? 'Me too';     //  'Me too'
    
    false ?? 'I lose'          //  false
    0 ?? 'I lose again'        //  0
    '' ?? 'Damn it'            //  ''
    `,
  },
  {
    title:"else if",
    code:`const size = 10;

    if (size > 100) {
      console.log('Big');
    } else if (size > 20) {
      console.log('Medium');
    } else if (size > 4) {
      console.log('Small');
    } else {
      console.log('Tiny');
    }
    // Print: Small
    `
  },
  {
    title:"switch Statement",
    code:`const food = 'salad';

    switch (food) {
      case 'oyster':
        console.log('The taste of the sea');
        break;
      case 'pizza':
        console.log('A delicious pie');
        break;
      default:
        console.log('Enjoy your meal');
    }
    `,
  },
  {
    title:"== vs ===",
    code:`0 == false   // true
    0 === false  // false, different type
    1 == "1"     // true,  automatic type conversion 
    1 === "1"    // false, different type
    null == undefined  // true
    null === undefined // false
    '0' == false       // true
    '0' === false      // false
    `
  },
  {
    title:"Functions",
    code:`// Defining the function:
    function sum(num1, num2) {
      return num1 + num2;
    }
    
    // Calling the function:
    sum(3, 6); // 9
    `
  },
  {
    title:"Anonymous Functions",
    code:`// Named function
    function rocketToMars() {
      return 'BOOM!';
    }
    
    // Anonymous function
    const rocketToMars = function() {
      return 'BOOM!';
    }
    ,`
  },
  {
    title:"Arrow Functions (ES6) With no arguments",
    code:`const printHello = () => { 
        console.log('hello'); 
      }; 
      printHello(); // => hello
      `,
  },
  {
    title:"Arrow Functions (ES6) With two arguments",
    code:`const sum = (param1, param2) => { 
        return param1 + param2; 
      }; 
      console.log(sum(2,5)); // => 7 
      `,
  },
  {
    title:"Arrow Functions (ES6) With a single arguments",
    code:`const checkWeight = weight => { 
        console.log(); 
      }; 
      checkWeight(25); // => Weight : 25       
      `,
  },
  {
    title:"Arrow Functions (ES6) Concise arrow functions",
    code:`const multiply = (a, b) => a * b; 
    // => 60 
    console.log(multiply(2, 30)); 
        
      `,
  },
  {
    title:"return Keyword",
    code:`// With return
    function sum(num1, num2) {
      return num1 + num2;
    }
    
    // The function doesn't output the sum
    function sum(num1, num2) {
      num1 + num2;
    }
    `,
  },
  {
    title:"Calling Functions",
    code:`// Defining the function
    function sum(num1, num2) {
      return num1 + num2;
    }
    
    // Calling the function
    sum(2, 4); // 6
    `,
  },
  {
    title:"Functions Expressions",
    code:`const dog = function() {
        return 'Woof!';
      }
      `
  },
  {
    title:"Function Parameters",
    code:`// The parameter is name
    function sayHello(name) {
      return ;
    }
    `
  },
  {
    title:"Function Declaration",
    code:`function add(num1, num2) {
        return num1 + num2;
      }
      `
  },
  {
    title:"Scope",
    code:`function myFunction() {
  
        var pizzaName = "Margarita";
        // Code here can use pizzaName
        
      }
      
      // Code here can't use pizzaName
      `
  },
  {
    title:"Block Scoped Variables",
    code:`const isLoggedIn = true;

    if (isLoggedIn == true) {
      const statusMessage = 'Logged in.';
    }
    
    // Uncaught ReferenceError...
    console.log(statusMessage);
    
    `
  },
  {
    title:"Global Variables",
    code:`// Variable declared globally
    const color = 'blue';
    
    function printColor() {
      console.log(color);
    }
    
    printColor(); // => blue
    `
  },
  {
    title:"let vs var",
    code:`for (let i = 0; i < 3; i++) {
        // This is the Max Scope for 'let'
        // i accessible ✔️
      }
      // i not accessible ❌

      for (var i = 0; i < 3; i++) {
        // i accessible ✔️
      }
      // i accessible ✔️
      
      
      `
  },
  {
    title:"Loops with closures",
    code:`// Prints 3 thrice, not what we meant.
    for (var i = 0; i < 3; i++) {
      setTimeout(_ => console.log(i), 10);
    }

    // Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
  setTimeout(_ => console.log(j), 10);
}

The variable has its own copy using let, and the variable has shared copy using var.

    `,
  },
  {
    title:"Arrays",
    code:`const fruits = ["apple", "orange", "banana"];

    // Different data types
    const data = [1, 'chicken', false];
    `
  },
  {
    title:"Property .length",
    code:`const numbers = [1, 2, 3, 4];

    numbers.length // 4
    `
  },
  {
    title:"index",
    code:`// Accessing an array element
    const myArray = [100, 200, 300];
    
    console.log(myArray[0]); // 100
    console.log(myArray[1]); // 200
    `,


  },
  {
   title:"Method .push()",
   code:`// Adding a single element:
   const cart = ['apple', 'orange'];
   cart.push('pear'); 
   
   // Adding multiple elements:
   const numbers = [1, 2];
   numbers.push(3, 4, 5);
   `,
  },
  {
    title:"Method .pop()",
    code:` const fruits = ["apple", "orange", "banana"];

    const fruit = fruits.pop(); // 'banana'
    console.log(fruits); // ["apple", "orange"]

    Remove an item from the end and returns the removed item.
    `
  },
  {
    title:"Method .shift()",
    code:`let cats = ['Bob', 'Willy', 'Mini'];

    cats.shift(); // ['Willy', 'Mini']
    Remove an item from the beginning and returns the removed item.
    `
  },
  {
    title:"Method .unshift()",
    code:`let cats = ['Bob'];

    // => ['Willy', 'Bob']
    cats.unshift('Willy');
    
    // => ['Puff', 'George', 'Willy', 'Bob']
    cats.unshift('Puff', 'George');


    Add items to the beginning and returns the new array length.
    `
  },
  {
    title:"Method .concat()",
    code:`const numbers = [3, 2, 1]
    const newFirstNumber = 4
        
    // => [ 4, 3, 2, 1 ]
    [newFirstNumber].concat(numbers)
        
    // => [ 3, 2, 1, 4 ]
    numbers.concat(newFirstNumber)

    if you want to avoid mutating your original array, you can use concat.
    
    `
  },
  {
    title:"While Loop",
    code:`while (condition) {
        // code block to be executed
      }
      
      let i = 0;
      while (i < 5) {        
        console.log(i);
        i++;
      }
      `

  },
  {
    title:"Reverse Loop",
    code:`const fruits = ["apple", "orange", "banana"];

    for (let i = fruits.length - 1; i >= 0; i--) {
      console.log(fruits[i]);
    }
    
    // => 2. banana
    // => 1. orange
    // => 0. apple
    `
  },
  {
    title:"Do.. While Statement",
    code:`x = 0
    i = 0
    
    do {
      x = x + i;
      console.log(x)
      i++;
    } while (i < 5);
    // => 0 1 3 6 10
    `
  },
  {
    title:"For Loop",
    code:`for (let i = 0; i < 4; i += 1) {
        console.log(i);
      };
      
      // => 0, 1, 2, 3
      `
  },
  {
    title:"Looping Through Arrays",
    code:`for (let i = 0; i < array.length; i++){
        console.log(array[i]);
      }
      
      // => Every item in the array
      `
  },
  {
    title:"Break",
    code:`for (let i = 0; i < 99; i += 1) {
        if (i > 5) {
           break;
        }
        console.log(i)
      }
      // => 0 1 2 3 4 5
      `
  },
  {
    title:"Continue",
    code:`for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
      }
      `
  },
  {
    title:"Nested",
    code:`for (let i = 0; i < 2; i += 1) {
        for (let j = 0; j < 3; j += 1) {
          console.log(i-j);
        }
      }
      `
  },
  {
    title:"for...in loop",
    code:`const fruits = ["apple", "orange", "banana"];

    for (let index in fruits) {
      console.log(index);
    }
    // => 0
    // => 1
    // => 2
    `

  },
  {
    title:"for...of loop",
    code:`const fruits = ["apple", "orange", "banana"];

    for (let fruit of fruits) {
      console.log(fruit);
    }
    // => apple
    // => orange
    // => banana
    `
  },
  {
    title:"Functions Assigned to Variables",
    code:`let plusFive = (number) => {
        return number + 5;  
      };
      // f is assigned the value of plusFive
      let f = plusFive;
      
      plusFive(3); // 8
      // Since f has a function value, it can be invoked. 
      f(9); // 14
      
      `
  },
  {
    title:"Callback Functions",
    code:`const isEven = (n) => {
        return n % 2 == 0;
      }
      
      let printMsg = (evenFunc, num) => {
        const isNumEven = evenFunc(num);
        console.log( is an even number:)
      }
      
      // Pass in isEven as the callback function
      printMsg(isEven, 4); 
      // => The number 4 is an even number: True.
      `
  },
  {
    title:"Array Method .reduce()",
    code:`const numbers = [1, 2, 3, 4];

    const sum = numbers.reduce((accumulator, curVal) => {  
      return accumulator + curVal;
    });
    
    console.log(sum); // 10
    `
  },
  {
    title :"Arrray Method .map()",
    code:`const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

    const announcements = members.map((member) => {
      return member + " joined the contest.";
    });
    
    console.log(announcements);
    `
  },
  {
    title:"Array Method .forEach() ",
    code:`const numbers = [28, 77, 45, 99, 27];

    numbers.forEach(number => {  
      console.log(number);
    }); 
    `
  },
  {
    title:"Array Method .filter()",
    code:`const randomNumbers = [4, 11, 42, 14, 39];
    const filteredArray = randomNumbers.filter(n => {  
      return n > 5;
    });
    `
  },
  {
    title:"Accessing Properties",
    code:`const apple = { 
        color: 'Green',
        price: { bulk: '$3/kg', smallQty: '$4/kg' }
      };
      console.log(apple.color); // => Green
      console.log(apple.price.bulk); // => $3/kg
      `
  },
  {
    title:"Naming Properties",
    code:`// Example of invalid key names
    const trainSchedule = {
      // Invalid because of the space between words.
      platform num: 10, 
      // Expressions cannot be keys.
      40 - 10 + 2: 30,
      // A + sign is invalid unless it is enclosed in quotations.
      +compartment: 'C'
    }
    `

  },
  {
    title:"Non-existent properties",
    code:`const classElection = {
        date: 'January 12'
      };
      
      console.log(classElection.place); // undefined
      `
  },
  {
    title:"Mutable",
    code:`const student = {
        name: 'Sheldon',
        score: 100,
        grade: 'A',
      }
      
      console.log(student)
      // { name: 'Sheldon', score: 100, grade: 'A' }
      
      delete student.score
      student.grade = 'F'
      console.log(student)
      // { name: 'Sheldon', grade: 'F' }
      
      student = {}
      // TypeError: Assignment to constant variable.
      `
  },
  {
    title:"Assignment shorthand syntax ",
    code:`const person = {
        name: 'Tom',
        age: '22',
      };
      const {name, age} = person;
      console.log(name); // 'Tom'
      console.log(age);  // '22'
      `
  },
  {
    title:"Delete operator",
    code:`const person = {
        firstName: "Matilda",
        age: 27,
        hobby: "knitting",
        goal: "learning JavaScript"
      };
      
      delete person.hobby; // or delete person[hobby];
      
      console.log(person);
      /*
      {
        firstName: "Matilda"
        age: 27
        goal: "learning JavaScript"
      }
      */
          
      `
  },
  {
    title:"Objects as arguments ",
    code:`const origNum = 8;
    const origObj = {color: 'blue'};
    
    const changeItUp = (num, obj) => {
      num = 7;
      obj.color = 'red';
    };
    
    changeItUp(origNum, origObj);
    
    // Will output 8 since integers are passed by value.
    console.log(origNum);
    
    // Will output 'red' since objects are passed 
    // by reference and are therefore mutable.
    console.log(origObj.color);
    `
  },
  {
    title:"Shorthand object creation",
    code:`const activity = 'Surfing';
    const beach = { activity };
    console.log(beach); // { activity: 'Surfing' }
    `

  },
  {
    title:"this Keyword ",
    code:`const cat = {
        name: 'Pipey',
        age: 8,
        whatName() {
          return this.name  
        }
      };
      console.log(cat.whatName()); // => Pipey
      `
  },
  {
    title:"Factory functions",
    code:`// A factory function that accepts 'name', 
    // 'age', and 'breed' parameters to return 
    // a customized dog object. 
    const dogFactory = (name, age, breed) => {
      return {
        name: name,
        age: age,
        breed: breed,
        bark() {
          console.log('Woof!');  
        }
      };
    };
    
    `
  },
  {
    title:"Methods",
    code:`const engine = {
        // method shorthand, with one argument
        start(adverb) {
          console.log("The engine starts up {adverb}...");
        },  
        // anonymous arrow function expression with no arguments
        sputter: () => {
          console.log('The engine sputters...');
        },
      };
      
      engine.start('noisily');
      engine.sputter();
      `
  },
  {
    title:"Getters and setters",
    code:`const myCat = {
        _name: 'Dottie',
        get name() {
          return this._name;  
        },
        set name(newName) {
          this._name = newName;  
        }
      };
      
      // Reference invokes the getter
      console.log(myCat.name);
      
      // Assignment invokes the setter
      myCat.name = 'Yankee';
      `
  },
  {
    title:"Static Methods",
    code:`class Dog {
        constructor(name) {
          this._name = name;  
        }
        
        introduce() { 
          console.log('This is ' + this._name + ' !');  
        }
        
        // A static method
        static bark() {
          console.log('Woof!');  
        }
      }
      
      const myDog = new Dog('Buster');
      myDog.introduce();
      
      // Calling the static method
      Dog.bark();
      `

  },
  {
    title:"Class",
    code:`class Song {
        constructor() {
          this.title;
          this.author;
        }
        
        play() {
          console.log('Song playing!');
        }
      }
      
      const mySong = new Song();
      mySong.play();
      `
  },
  {
    title:"Class Constructor",
    code:`class Song {
        constructor(title, artist) {
          this.title = title;
          this.artist = artist;
        }
      }
      
      const mySong = new Song('Bohemian Rhapsody', 'Queen');
      console.log(mySong.title);
      `
  },
  {
    title:"Class  Methods",
    code:`class Song {
        play() {
          console.log('Playing!');
        }
        
        stop() {
          console.log('Stopping!');
        }
      }
      `
  },
  {
    title:"extends",
    code:`// Parent class
    class Media {
      constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
      }
    }
    
    // Child class
    class Song extends Media {
      constructor(songData) {
        super(songData);
        this.artist = songData.artist;
      }
    }
    
    const mySong = new Song({ 
      artist: 'Queen', 
      name: 'Bohemian Rhapsody', 
      publishDate: 1975
    });
    `
  },
  {
    title:"Export",
    code:`// myMath.js

    // Default export
    export default function add(x,y){
        return x + y
    }
    
    // Normal export
    export function subtract(x,y){
        return x - y
    }
    
    // Multiple exports
    function multiply(x,y){
        return x * y
    }
    function duplicate(x){
        return x * 2
    }
    export {
        multiply,
        duplicate
    }
    `

  },
  {
    title:"import",
    code:`// main.js
    import add, { subtract, multiply, duplicate } from './myMath.js';
    
    console.log(add(6, 2)); // 8 
    console.log(subtract(6, 2)) // 4
    console.log(multiply(6, 2)); // 12
    console.log(duplicate(5)) // 10
    
    // index.html
    <script type="module" src="main.js"></script>
    `
  },
  {
    title:"Export Module",
    code:`// myMath.js

    function add(x,y){
        return x + y
    }
    function subtract(x,y){
        return x - y
    }
    function multiply(x,y){
        return x * y
    }
    function duplicate(x){
        return x * 2
    }
    
    // Multiple exports in node.js
    module.exports = {
        add,
        subtract,
        multiply,
        duplicate
    }
    `
  },
  {
    title:"Require Module",
    code:`// main.js
    const myMath = require('./myMath.js')
    
    console.log(myMath.add(6, 2)); // 8 
    console.log(myMath.subtract(6, 2)) // 4
    console.log(myMath.multiply(6, 2)); // 12
    console.log(myMath.duplicate(5)) // 10
    `
  },
  {
    title:"Promise states",
    code:`const promise = new Promise((resolve, reject) => {
        const res = true;
        // An asynchronous operation.
        if (res) {
          resolve('Resolved!');
        }
        else {
          reject(Error('Error'));
        }
      });
      
      promise.then((res) => console.log(res), (err) => console.error(err));
      `
  },
  {
    title:"Executor function",
    code:`const executorFn = (resolve, reject) => {
        resolve('Resolved!');
      };
      
      const promise = new Promise(executorFn);
      `
  },
  {
    title:"setTimeout()",
    code:`const loginAlert = () =>{
        console.log('Login');
      };
      
      setTimeout(loginAlert, 6000);
      `
  },
  {
    title:".then method",
    code:`const promise = new Promise((resolve, reject) => {    
        setTimeout(() => {
          resolve('Result');
        }, 200);
      });
      
      promise.then((res) => {
        console.log(res);
      }, (err) => {
        console.error(err);
      });
      `
  },
  {
    title:".catch() method",
    code:`const promise = new Promise((resolve, reject) => {  
        setTimeout(() => {
          reject(Error('Promise Rejected Unconditionally.'));
        }, 1000);
      });
      
      promise.then((res) => {
        console.log(value);
      });
      
      promise.catch((err) => {
        console.error(err);
      });
      `
  },
  {
    title:"Promise.all()",
    code:`const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(3);
        }, 300);
      });
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2);
        }, 200);
      });
      
      Promise.all([promise1, promise2]).then((res) => {
        console.log(res[0]);
        console.log(res[1]);
      });
      `
  },
  {
    title:"Avoiding nested Promise and .then()",
    code:`const promise = new Promise((resolve, reject) => {  
        setTimeout(() => {
          resolve('*');
        }, 1000);
      });
      
      const twoStars = (star) => {  
        return (star + star);
      };
      
      const oneDot = (star) => {  
        return (star + '.');
      };
      
      const print = (val) => {
        console.log(val);
      };
      
      // Chaining them all together
      promise.then(twoStars).then(oneDot).then(print);
      `
  }
  ,{
    title:"Creating",
    code:`const executorFn = (resolve, reject) => {
        console.log('The executor function of the promise!');
      };
      
      const promise = new Promise(executorFn);
      `
  },
  {
    title:"Chaining multiple .then()",
    code:`const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

    promise.then(res => {
      return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
    }).then((res) => {
      console.log(res)
    }, (err) => {
      console.error(err)
    });
    `

  },
  {
    title:"Fake http Request with Promise",
    code:`const mock = (success, timeout = 1000) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(success) {
              resolve({status: 200, data:{}});
            } else {
              reject({message: 'Error'});
            }
          }, timeout);
        });
      }
      const someEvent = async () => {
        try {
          await mock(true, 1000);
        } catch (e) {
          console.log(e.message);
        }
      }
      `
  },
  {
    title:"Asynchronous",
    code:`function helloWorld() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('Hello World!');
          }, 2000);
        });
      }
      
      const msg = async function() { //Async Function Expression
        const msg = await helloWorld();
        console.log('Message:', msg);
      }
      
      const msg1 = async () => { //Async Arrow Function
        const msg = await helloWorld();
        console.log('Message:', msg);
      }
      
      msg(); // Message: Hello World! <-- after 2 seconds
      msg1(); // Message: Hello World! <-- after 2 seconds
      `

  },
  {
    title:"Resolving Promises",
    code:`let pro1 = Promise.resolve(5);
    let pro2 = 44;
    let pro3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 100, 'foo');
    });
    
    Promise.all([pro1, pro2, pro3]).then(function(values) {
      console.log(values);
    });
    // expected => Array [5, 44, "foo"]
    `
  },
  {
    title:"Async Await Promises",
    code:`function helloWorld() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('Hello World!');
          }, 2000);
        });
      }
      
      async function msg() {
        const msg = await helloWorld();
        console.log('Message:', msg);
      }
      
      msg(); // Message: Hello World! <-- after 2 seconds
      `
  },
  {
    title:"Error Handling",
    code:`let json = '{ "age": 30 }'; // incomplete data

    try {
      let user = JSON.parse(json); // <-- no errors
      console.log( user.name ); // no name!
    } catch (e) {
      console.error( "Invalid JSON data!" );
    }
    `
  },
  {
    title:"Aysnc await operator",
    code:`function helloWorld() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('Hello World!');
          }, 2000);
        });
      }
      
      async function msg() {
        const msg = await helloWorld();
        console.log('Message:', msg);
      }
      
      msg(); // Message: Hello World! <-- after 2 seconds
      `
  },
  {
    title:"JSON",
    code:`const jsonObj = {
        "name": "Rick",
        "id": "11A",
        "level": 4  
      };
      `
  },
  {
    title:"XMLHttpRequest",
    code:`const xhr = new XMLHttpRequest();
    xhr.open('GET', 'mysite.com/getjson');
    
    XMLHttpRequest is a browser-level API that enables the client to script data transfers via JavaScript, NOT part of the JavaScript language.
    `
  },
  {
    title:"GET",
    code:`const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', '/getdata?id=65');
    req.onload = () => {
      console.log(xhr.response);
    };
    
    req.send();
    `
  },
  {
    title:"POSt",
    code:`const data = {
        fish: 'Salmon',
        weight: '1.5 KG',
        units: 5
      };
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/inventory/add');
      xhr.responseType = 'json';
      xhr.send(JSON.stringify(data));
      
      xhr.onload = () => {
        console.log(xhr.response);
      };
      `
  },
  {
    title:"fetch api",
    code:`fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'apikey': apiKey
        },
        body: data
      }).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message)
      })
    }
    `
  },
  {
    title:"JSON Formatted",
    code:`fetch('url-that-returns-JSON')
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
    });
    `
  },
  {
    title:"promise url parameter fetch api",
    code:`fetch('url')
    .then(
      response  => {
        console.log(response);
      },
     rejection => {
        console.error(rejection.message);
    );
    `
  },
  {
    title:"Fetch API Function ",
    code:`fetch('https://api-xxx.com/endpoint', {
        method: 'POST',
       body: JSON.stringify({id: "200"})
      }).then(response => {
        if(response.ok){
            return response.json();  
        }
          throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message);
      }).then(jsonResponse => {
        console.log(jsonResponse);
      })
      `
  },
  {
    title:"async await syntax",
    code:`const getSuggestions = async () => {
        const wordQuery = inputField.value;
        const endpoint = "url link";
        try{
      const response = await fetch(endpoint, {cache: 'no-cache'});
          if(response.ok){
            const jsonResponse = await response.json()
          }
        }
        catch(error){
          console.log(error)
        }
      }
      `
  },






  
 

];

const subTitle = document.getElementById("sub-title");
const cardList = document.getElementById("cardList");

titleList.forEach((list) => {
  cardList.innerHTML += `
    <div class="card-body">
    <h3 id="sub-title" class="card-title">${list.title}</h3>
    <div class="card-code" >
        <pre>
            <button class="card-copy-btn">
                <svg height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path> </svg>
            </button>
            <code class="language-javascript" onclick="copyText()" id="copy-txt">
           ${list.code}
            </code>
        </pre>
    </div>


</div>
    `;
});

// document.addEventListener('DOMContentLoaded', function() {
//     var copyDivs = document.querySelectorAll('.copy-txt');
//     copyDivs.forEach(function(copyDiv) {
//       copyDiv.addEventListener('click', function() {
//         copyText(this.textContent);
//       });
//     });
//   });

// function copyText() {
//     var textToCopy = document.getElementById('copy-txt').textContent;
    
//     navigator.clipboard.writeText(textToCopy)
//       .then(() => {
//         alert('Text copied: ' + textToCopy);
//       })
//       .catch(err => {
//         console.error('Could not copy text: ', err);
//       });
//   }

function changeMode(){
console.log("dark mode");
    document.body.classList.toggle("dark-mode");
}


const gotoIcon = document.getElementById("goto");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    gotoIcon.style.display = "block";
  } else {
    gotoIcon.style.display = "none";
  }
}
function gotoTop(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  }
  
  updateProgressBar(); 
  window.addEventListener('scroll', updateProgressBar);
  window.addEventListener('resize', updateProgressBar);
  
  
  // Progress circle
  function updateProgressCircle() {
    const progressElement = document.querySelector('.progress-circle-bar');
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;
  
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      scrollToTopElement.style.opacity = '1';
    } else {
      scrollToTopElement.style.opacity = '0';
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  
  const scrollToTopElement = document.querySelector('.scroll-to-top');
  scrollToTopElement.addEventListener('click', scrollToTop);
  
  
  updateProgressCircle();
  window.addEventListener('scroll', updateProgressCircle);
  window.addEventListener('resize', updateProgressCircle);