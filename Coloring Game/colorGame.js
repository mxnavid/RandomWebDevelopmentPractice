//alert("Connected");

var colors=generateRandomColor(6)

var squares = document.querySelectorAll(".square");
var pickedColor = randomColorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
    
    squares[i].style.backgroundColor = colors[i]

    squares[i].addEventListener("click",  function(){
        
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            //alert("Correct Color Picker");
            messageDisplay.textContent = "Correct Pick";
            changeColor(clickedColor);
            

        }
        else{
            //alert("Wrong Color Picked");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            

        }
    });
}

function changeColor (color){
    for (var i = 0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomColorPicker(){
    var rawRandom = Math.random() * squares.length;
    RandomNumber = Math.floor(rawRandom);
    return colors[RandomNumber];

}

function generateRandomColor(numberofColors){
    var arr = [];
    
    for (var i = 0; i< numberofColors ;  i++){
        arr.push(generateRGB());
    }
    

    return arr;
}

function generateRGB(){
    var red = Math.floor(Math.random() * (255+1));
    var green = Math.floor(Math.random() * (255+1));;
    var blue = Math.floor(Math.random() * (255+1));
    return "rgb(" + r + "," + g + "," + b + ")";
}