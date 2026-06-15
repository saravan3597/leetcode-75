// # Test Case 1
const s1 = "IceCreAm";
// Expected Output: "AceCreIm"

// # Test Case 2
const s2 = "leetcode";
// Expected Output: "leotcede"

var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arr = s.split("");
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
    } else if (!vowels.has(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // Destructuring pattern for just-in-place swaps
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels(s2));
