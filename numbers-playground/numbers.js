const form = document.querySelector('form'); 
const input = document.querySelector("input"); 
const numText = document.getElementById('numText'); 

const randomBtn = document.getElementById("randomBtn");
const multByTwoBtn = document.getElementById("multByTwo"); 
const divByTwoBtn = document.getElementById("divByTwo"); 
const modTwoBtn = document.getElementById("modTwo"); 
const roundBtn = document.getElementById("round"); 




let num; 

function updateNum(){
  numText.textContent = num;
}

input.addEventListener('input', () =>{
  num = input.value;
  updateNum();
}); 

randomBtn.addEventListener('click', () => {
  num = (Math.random() * 100).toFixed(2); 
  updateNum(); 
})

multByTwoBtn.addEventListener('click', () => {
  num *= 2;
  updateNum();
}); 

//TODO: add: /, -, %, random, round, everything
