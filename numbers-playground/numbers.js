const input = document.querySelector("input"); 
const randomBtn = document.getElementById("randomBtn");
let numText = document.getElementById('numText'); 
const form = document.querySelector('form'); 



function updateField(userInput){
  numText.textContent = userInput;
}

input.addEventListener('input', () => {
  numText.textContent = input.value;
}); 
