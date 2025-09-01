// Part 1: Variables & Conditionals
// ---------------------
let userName = "OB";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(userName + " is logged in!");
} else {
  console.log("User not logged in.");
}


// Part 2: Functions
// ---------------------
function greetUser(name) {
  return "Hello, " + name + "!";
}

function addNumbers(a, b) {
  return a + b;
}


// Part 3: Loops
// ---------------------
function showNumbers() {
  // For loop
  for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
    addListItem("Number: " + i);
  }

  // While loop
  let j = 5;
  while (j > 0) {
    console.log("Countdown: " + j);
    addListItem("Countdown: " + j);
    j--;
  }
}


// Part 4: DOM Interactions
// ---------------------

// (1) Change text content
document.getElementById("title").textContent = "JavaScript Project 🚀";

// (2) Add event listener to button
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("description").textContent = greetUser(userName);
  console.log("Sum of 5 + 3 = " + addNumbers(5, 3));
});

// (3) Another DOM interaction: append new list items
function addListItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
  document.getElementById("list").appendChild(li);
}

document.getElementById("loopBtn").addEventListener("click", showNumbers);
