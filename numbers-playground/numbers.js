const form = document.querySelector('form'); 
const input = document.querySelector("input"); 
const numText = document.getElementById('numText'); 

const randomBtn = document.getElementById("randomBtn");
const multByTwoBtn = document.getElementById("multByTwo"); 
const divByTwoBtn = document.getElementById("divByTwo"); 
const modTwoBtn = document.getElementById("modTwo"); 
const roundBtn = document.getElementById("round"); 
const roundUpBtn = document.getElementById("roundUp"); 
const roundDownBtn = document.getElementById("roundDown"); 
const removeDeciBtn = document.getElementById("trunc"); 






let num; 

function updateNum(){
  if(num === "" || Number.isNaN(num)){
    numText.textContent = "Enter a Number!";
    
  }else{
  numText.textContent = num;
  }
}

input.addEventListener('input', () =>{
  if(input.value === "") {
    num = "";
  } else {
    num = +input.value;
  }
  updateNum(); 
}); 

randomBtn.addEventListener('click', () => {
  num = +(Math.random() * 100).toFixed(2); 
  updateNum(); 
})

multByTwoBtn.addEventListener('click', () => {
  num *= 2;
  updateNum();
}); 


divByTwoBtn.addEventListener('click', () => {
  num /= 2;
  updateNum();
}); 

modTwoBtn.addEventListener('click', () => {
  num %= 2;
  updateNum();
}); 

roundBtn.addEventListener('click', () => {
  num = Math.round(num); 
  updateNum();
}); 

roundUpBtn.addEventListener('click', () => {
  num = Math.ceil(num); 
  updateNum();
}); 

roundDownBtn.addEventListener('click', () => {
  num = Math.floor(num); 
  updateNum();
}); 

removeDeciBtn.addEventListener('click', () => {
  num = Math.trunc(num); 
  updateNum();
}); 

