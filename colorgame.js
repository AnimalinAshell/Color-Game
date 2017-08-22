var numSquares = 6;
var colors = generateRandomColors(numSquares);
var i;
var squares = document.querySelectorAll(".square");
var picked = pickedColor();
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


document.querySelector("#colorQuestDis").textContent = picked;

easyBtn.addEventListener("click", function() {
    
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    picked = pickedColor();
    document.querySelector("#colorQuestDis").textContent = picked;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    picked = pickedColor();
    document.querySelector("#colorQuestDis").textContent = picked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        
    }
});


resetButton.addEventListener("click", function() {
    
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    picked = pickedColor();
    
    // change display of color quest
    document.querySelector("#colorQuestDis").textContent = picked;
    
    // change colors of sqaures
    for (i = 0; i < squares.length; i++) {
    // add inital colors to squares
    squares[i].style.background = colors[i];
    
    // reset header color
    document.querySelector("h1").style.backgroundColor = "steelblue";
    
    // reset message span
    messageDisplay.textContent = "";
        
    //reset new colors button
    resetButton.textContent = "New Colors";
    
    }
});


for (i = 0; i < squares.length; i++) {
    // add inital colors to squares
    squares[i].style.background = colors[i];
    
    // add events to the squares
    squares[i].addEventListener("click", function() {
        
        var clickedColor = this.style.backgroundColor;
        
        if (clickedColor === picked){
            
            document.querySelector("#colorQuestDis").textContent = "WINNER!!!";
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            // change reset buttont text to "play again?"
            resetButton.textContent = "Play Again?";
           
        }
        else {
            
            this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try Again!";
        
        } 
    });
}

function pickedColor () {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b +")";
}

// changes all sqaure colors to match the winning color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor = color;
        
    }
    
    document.querySelector("h1").style.backgroundColor = color;
}

