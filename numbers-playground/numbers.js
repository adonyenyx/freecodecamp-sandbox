const form = document.querySelector('form'); 
const input = document.querySelector("input"); 
const numText = document.getElementById('numText'); 
const randomBtn = document.getElementById("randomBtn");
const multByTwoBtn = document.getElementById("multByTwo"); 


let num; 

function updateNum(){
  numText.textContent = num;
}

input.addEventListener('input', () =>{
  num = input.value;
  updateNum();
}); 

multByTwoBtn.addEventListener('click', () => {
  num *= 2;
  updateNum();
})
