//Targation all Essential Elements
let body = document.getElementById("body");
let input = document.getElementById("colorCode");
let heading = document.getElementById("heading");
let copyButton = document.getElementById("copyButton");
let autoButton = document.getElementById("autoButton");
let generateButton = document.getElementById("generateButton");

//Code Generate Function
generateButton.addEventListener("click",function(){
    let allCodes = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f",];
    let colorCode = "#";
    for (let index = 0; index < 6; index++) {
        let codeNumber = Math.floor(Math.random()*15);
       let mainCodeNumber = allCodes[codeNumber];
       colorCode += mainCodeNumber;
    }
    //Setting the color
    body.style.background = colorCode;
    input.value = colorCode;
    input.style.color = colorCode;
    heading.style.color = colorCode;
    copyButton.style.background = colorCode;
    autoButton.style.background = colorCode;
    generateButton.style.background = colorCode;
});

//Copy Button Function
copyButton.addEventListener("click", function(){
    input.select();
    document.execCommand("copy");
});


// Automatic Code Generate 
var startButton;
var myInterval = -1;
autoButton.addEventListener("click",function() {
   if (myInterval == -1) {
    startButton = setInterval(function(){
    generateButton.click()},1000);
    myInterval = 2;
    autoButton.innerHTML = "PAUSE";
   } else{
    autoButton.innerHTML = "Auto Generate";
    clearInterval(startButton);
    myInterval = -1
   }
});

