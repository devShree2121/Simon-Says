let score = document.querySelector("h2");
let userSeq = [];
let gameSeq = [];
let start = false;
let buttons = document.querySelectorAll(".btn");
let btns = ["red", "yellow", "purple", "blue"];
let level = 0; // Variable to track the current level


document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game is started");
        start = true;
        score.style.color="black";
        document.body.style.backgroundColor = "white"; 
        nextRound(); // Start the first round when the game begins
    }
});

// Start the next round
function nextRound() {
    userSeq = []; // Clear the user's sequence for the new round
    level++;
    score.textContent = `Level: ${level}`; // Update score display
    let randomColor = btns[choseColor()];
    gameSeq.push(randomColor); // Add a new color to the game sequence
    console.log("Game sequence: ", gameSeq);
    let btn=document.getElementById(`${randomColor}`);
    console.log(btn);

    colorFlash(btn) ;

  
}

// Function to choose a random color index
function choseColor() {
    let index = Math.floor(Math.random() * 4);
    return index;
}

// Flash effect for the button
function colorFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

// Listen for user input and track their sequence
for (let btn of buttons) {
    btn.addEventListener("click", function () {
        console.log(btn.id);
        userSeq.push(btn.id); // Track the user's sequence of clicks
        console.log(userSeq);
        colorFlash(btn);

        // Compare the user's sequence with the game sequence
        if (userSeq[userSeq.length - 1] !== gameSeq[userSeq.length - 1]) {
            console.log("Game Over! You lost!");
         
           
            score.innerHTML= `Game over , your score was ${level} . Press any key to restart`;
            score.style.color="red";
            document.body.style.backgroundColor = "lightblue"; 

            start = false;
            gameSeq = [];
            level = 0;
           
            
            
        } else {
            // If the sequences match, check if the user has completed the entire round
            if (userSeq.length === gameSeq.length) {
                console.log("Correct sequence! Next round!");
                setTimeout(nextRound, 300); // Start next round after a short delay
            }
        }
    });
}
