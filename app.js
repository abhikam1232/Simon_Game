let gameSeq = []; // two arrays created 
let userSeq = [];

let btns = ["pink", "green", "blue", "yellow"];

let started = false; // This will be used in if so that game does not restarts again and again.. 
let level = 0; // This is gonna increment further.. 

let h2 = document.querySelector("h2"); // Accessing the h2 element... 

// Applying Event Listener to the code:- 
document.addEventListener("keypress", function () {
    if ( started == false){
        console.log(" Game has started");
        started = true;
    }

    levelUp(); // This is basically a Function call back inside the document.eventListener
});


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = (`level ${level}`);
    let val = Math.floor(Math.random() * 4);
    let randColor = btns[val];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn); // Function call back over here!!!! 
};

// This function is used to flash the btn :- 
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    }, 250);
};

// This is for userFlash.. 
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout( function() {
        btn.classList.remove("userFlash");
    }, 250);
};

// Creatting a function to check whether the sequence has been matched or not:- 
function match(){
    //console.log(`Current level is:- ${level}`);

    let index = level-1;

    if ( userSeq[index] === gameSeq[index]){
        setTimeout(levelUp, 500);
    } else {
        h2.innerText = `Game over ${level}`;
    }

    
}

// Now we will create a btn press function:-
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    match(userSeq.length-1);

};

let allBtns = document.querySelectorAll(".btn");
for ( btn of allBtns){
    btn.addEventListener("click", btnPress);
};

































/**let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["pink", "green", "blue", "yellow"];

let h2 = document.querySelector("h2");

// Game start
document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("Game has been started");
        started = true;
        levelUp(); // should be inside this condition
    }
});

// Flash button function
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 290);
}

// Level up function
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    // Random index between 0 and 3 (inclusive)
    let val = Math.floor(Math.random() * 4);
    let randomColor = btns[val];
    let randomBtn = document.querySelector(`.${randomColor}`); // ✅ added '.'

    gameSeq.push(randomColor); // ✅ store sequence
    console.log("Level:", level);
    console.log("Random color:", randomColor);

    // Flash the randomly chosen button
    btnFlash(randomBtn);
};

function btnPress() {
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");

for ( btn of allBtns) {
    btn.addEventListener("click", btnPress);
} **/

