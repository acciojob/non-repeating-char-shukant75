function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
  const charCount = {};

  // First pass: Count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: Find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
