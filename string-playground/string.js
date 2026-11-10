const form = document.querySelector("form"); 
const userInput = document.getElementById("userInput"); 
const submitBtn = document.getElementById("submitBtn"); 
const upperCaseBtn = document.getElementById("upperCaseBtn"); 
const lowerCaseBtn = document.getElementById("lowerCaseBtn"); 
const displayUserInput = document.getElementById("displayUserInput");
const inputResult = document.getElementById("inputResult");  

let result;

function updateField(result) {
  inputResult.textContent = result; 

}


form.addEventListener("submit", (event) => {
  event.preventDefault(); 
})
 
// submitBtn.addEventListener("click", () => {
//   result = userInput.value; 
//   updateField(result)
// })

upperCaseBtn.addEventListener("click", () => {
  result = userInput.value.toUpperCase(); 
  updateField(result); 
})

lowerCaseBtn.addEventListener("click", () => {
  result = userInput.value.toLowerCase(); 
  updateField(result);
})



