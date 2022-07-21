//reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}
// return true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}