/* 
#Question 1

You are creating an ecommerce application selling products online. Some of the products are no longer in stock, and the user must be made aware of this.

Create a variable called `outOfStock` and assign it a `boolean` value.

Create an `if else` statement that checks the value of `outOfStock`.

If it is `true`, console log `"Out of stock"`.
Otherwise log `"In stock"`.
*/

var outOfStock = true;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

/*
#Question 2

Create a `for loop` that counts from 15 to 25. Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

*/

for (var i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}

/* Question 3

You are creating an online game comparison website. When provided with a list of games, these should be displayed to the user.

Loop through the array below and add an `li` item to the `ul` element in the HTML containing the `title` and `rating` of each game only if the `rating` for the game is below `3.5`.

If a game is unrated, exclude it from the list.

The `ul` element should look similar to this after your code executes:

```html
<ul>
 <li>Name of game: rating</li>
 <li>Name of game: rating</li>
</ul>
```

*/

var games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];

var gamesList = document.querySelector("ul");

for (i = 0; i < games.length; i++) {
  var gamesInfo = games[i];

  if (gamesInfo.rating <= 3.5 && gamesInfo.rating !== null) {
    gamesList.innerHTML += "<li>" + gamesInfo.title + ": " + gamesInfo.rating + "</li>";
  }
}

/* Question 4

Create a function called `whatIDontLike` that accepts one argument. Choose a good name for the argument.

Inside the function, check if the argument has a string value. If it doesn't log the message "Please send in a string".

If the argument is a string value, log the message `"I don't like "` together with the argument.

Call the function and pass in a value of your choice.

**Example:**<br>
If you pass in the value `"giraffes"`, the function should log: `"I don't like giraffes"`.

Test your function by calling it with a value of each of these types:
- String
- Number
- Boolean
- Null

*/

function whatIDontLike(argument) {
  if (typeof argument !== typeof "string") {
    console.log("please send in a string");
  } else if (typeof argument === typeof "string") {
    console.log("I dont like " + argument);
  }
}

whatIDontLike("when people sits down next to me on the buss");
whatIDontLike(341);
whatIDontLike(true);
whatIDontLike();

/* Question 5

Create a function that accepts two arguments.

Inside the function, try to convert the arguments to numbers.

If either of the arguments cannot be converted to a number, return the value: `"Invalid argument(s)"`.

If both arguments are number values or can be converted to number values, subtract the second argument from the first and return the result from the function.

Call the function, pass in to two values and assign the return value to be the innerHTML value of the element with the id `subtraction`.

Test your function with the following value pairs: `(1, 42), (200, 150), (10, "50"), ("100", "400"), ("Ten", "One Hundred"), (null, 123)`;

*/

function sumOfSub(numberOne, numberTwo) {
  var num1 = numberOne;
  var num2 = numberTwo;
  var subs = document.querySelector("#subtraction");

  if (typeof num1 === "string" && typeof num2 === "number") {
    return (subs.innerHTML = parseInt(num1) - num2);
  } else if (typeof num1 === "number" && typeof num2 === "string") {
    return (subs.innerHTML = num1 - parseInt(num2));
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    return (subs.innerHTML = num1 - num2);
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return (subs.innerHTML = parseInt(num1) - parseInt(num2));
  } else {
    return (subs.innerHTML = "Invalid argument(s)") && console.log("Invalid argument(s)");
  }
}

sumOfSub(1, 42);
sumOfSub(200, 150);
sumOfSub(10, "50");
sumOfSub("100", "400");
sumOfSub("Ten", "One Hundred");
sumOfSub(null, 123);

/* Question 6

Select the button with the class `page`.

When the button is clicked do the following:

- Change the title of the page (the value of the title element in the head) to "Updated title".
- Change the background colour of the whole page to "yellow".
- Change the color of the `h1` element to "green".
- Change the `h1` element's font to "impact".
- Change the value of the `h1` element to be a link.
- Remove the list style and padding from the `ul` element.

The `h1` element should look like this after the click event:

```html
<h1><a href="#">Programming Foundations Course Assignment</a></h1>
```

*/

var pageButton = document.querySelector(".page");
var headTitle = document.querySelector("title");
var bodyElement = document.querySelector("body");
var headerOne = document.querySelector("h1");

function changeSite() {
  headTitle.innerHTML = "Updated title";
  bodyElement.style.backgroundColor = "yellow";
  headerOne.innerHTML = "<a href='#'>" + headerOne.innerHTML + "</a>";
  headerOne.style.color = "green";
  headerOne.style.fontFamily = "impact";
  gamesList.style.padding = "0px";
  gamesList.style.listStyle = "none";
}

pageButton.onclick = changeSite;

/*
Question 7

Select the button with the class `price`.

When the button is clicked, loop through the array below, add all the prices and assign the total to be the innerHTML value of the element with the id `total`.


*/
/*
var toys = [
  {
    name: "Lego",
    price: 15.6,
  },
  {
    name: "Master of the Universe",
    price: "28.3",
  },
  {
    name: "Barbie",
    price: null,
  },
  {
    name: "Mr Potato Head",
    price: 89.99,
  },
];

var priceButton = document.innerHTML(".price");

function getPrice() {
  for(i=0; i < toys.length; i++)
}

 */
