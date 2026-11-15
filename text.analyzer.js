function analyzeText(string){
  console.log(`Original String: "${string}"`)

  const cString = string.trim();
  console.log(`Cleanded: "${cString}"`); 

  const cStringLength = cString.length; 
  console.log(`Character Count: ${cStringLength}`); 

  const cStringFirstChar = cString.slice(0, 1);
  console.log(`First Character: ${cStringFirstChar}`); 

  const cStringLastChar = cString.slice(-1);
  console.log(`Last Character: ${cStringLastChar}`); 

  if(cString.includes("JavaScript")){
    console.log(`Contains "JavaScript": ${cString.includes("JavaScript")}`);
  }
  const cStringToUpperCase = cString.toUpperCase();
  console.log(`Uppercase: ${cStringToUpperCase}`); 

}

analyzeText("  JavaScript Is Awesome!   ")