const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let btnPass = document.getElementById("btn-gpass")
let pass1 = document.getElementById("firstpass-el")
let pass2 = document.getElementById("secondpass-el")
let string1
let string2
let btnMode = document.getElementById("bdn-mode")
let genetared = false
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let checkedel = document.getElementById("checkSymbols")

function generatePass() {
    string1 = ""
    string2 = ""
    for (let i = 0; i < slider.value; i++) {
        if(checkedel.checked){
            string1 += characters[Math.floor(Math.random() * characters.length)]
            string2 += characters[Math.floor(Math.random() * characters.length)]
        }else{
            string1 += characters[Math.floor(Math.random() * 62)]
            string2 += characters[Math.floor(Math.random() * 62)]
            console.log(characters.length)
        }
    }
    pass1.textContent = string1
    pass2.textContent = string2
    genetared = true
}


function copyText(){
    if(genetared){
        let inputElement = document.createElement('input')
        inputElement.setAttribute('value',pass1.textContent)
        document.body.appendChild(inputElement)
        inputElement.select()
        document.execCommand("copy")
        inputElement.parentNode.removeChild(inputElement)
        alert("Password Copied!")
    }
}


function copyText2(){
    if(genetared){     
        let inputElement = document.createElement('input')
        inputElement.setAttribute('value',pass2.textContent)
        document.body.appendChild(inputElement)
        inputElement.select()
        document.execCommand("copy")
        inputElement.parentNode.removeChild(inputElement)
        alert("Password Copied!")
    }
}


function changeMode(){
    if(btnMode.textContent === "Light Mode"){
        document.querySelector("body").style.backgroundColor = "#1F2937"
        document.querySelector("div").style.backgroundColor = "#ECFDF5"
        document.querySelector("h3").style.color = "#6B7280"
        document.querySelector("h1").style.color = "#273549"
        document.querySelector("span").style.color = "#10B981"
        btnMode.style.backgroundColor = "#1F2937"
        btnMode.textContent = "Dark Mode"
        btnMode.style.color = "#5DEF92"
        document.getElementById("main-container").style.borderColor = "#10B981"
        document.querySelector("label").style.color = "#6B7280"
        document.getElementById("second-container").style.borderColor = "#D5D4D8"
        document.getElementById("demo").style.color = "#10B981"
        document.querySelector("p").style.color = "#10B981"
    }else{
        document.querySelector("body").style.backgroundColor = "#ECFDF5"
        document.querySelector("div").style.backgroundColor = "#1F2937"
        document.querySelector("h1").style.color = "white"
        document.querySelector("h3").style.color = "#D5D4D8"
        btnMode.style.backgroundColor = "#10B981"
        btnMode.textContent = "Light Mode"
        btnMode.style.color = "white"
        document.getElementById("main-container").style.borderColor = "white"
        document.querySelector("span").style.color = "#4ADF86"
        document.querySelector("label").style.color = "#D5D4D8"
        document.getElementById("second-container").style.borderColor = "#2F3E53"
        document.getElementById("demo").style.color = "#4ADF86"
        document.querySelector("p").style.color = "#4ADF86"
    }
    
}


output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}







