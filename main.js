/*const text = document.getElementById("text").value;
const button = document.getElementById("button");
const output = document.getElementById("output");

button.onclick = submitFunction;

function submitFunction(){
    let paragraph = document.createElement("p");
    paragraph.innerHTML = text;
    output.appendChild(paragraph);
}*/
function displayValue() {
    // Get the input field value
    const inputValue = document.getElementById("text").value;
    
    // Display the input value in the output div
    document.getElementById("output").textContent = inputValue;
}