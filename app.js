let gameSeq = [];
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
    }, 500);
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
}
