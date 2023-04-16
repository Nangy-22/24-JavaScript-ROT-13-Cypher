function rot13(encoded_str) {
  let decoded_str = ""; // Initialize an empty string to store the decoded characters
  for (let i = 0; i < encoded_str.length; i++) {
    // Loop through each character in the input string
    let char = encoded_str[i]; // Get the current character
    if (char.match(/[A-Z]/)) {
      // If the character is an uppercase letter
      let decoded_char = String.fromCharCode(
        ((char.charCodeAt() - 65 + 13) % 26) + 65
      );
      // Calculate the ASCII code of the decoded character by shifting it 13 places
      // using the ROT13 cipher, taking care of wrapping around to the beginning of the alphabet
      // Convert the ASCII code back to a character using String.fromCharCode()
      decoded_str += decoded_char; // Add the decoded character to the decoded string
    } else {
      decoded_str += char; // If the character is not an uppercase letter, pass it unchanged
    }
  }
  return decoded_str; // Return the decoded string
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
